---
layout: about
title: tools
description:
img: assets/img/pentest/h4Ck/mixNumbers.png
importance: 2
category: Linux
tag: pentesting
discus_comments: true
comments: true
toc:
  sidebar: left
related_posts: true
news: true
---

- [Tools](#tools)
  - [Active Directory](#active-directory)
  - [Cloud Pentesting](#cloud-pentesting)
  - [Cryptography](#cryptography)
  - [File Inclusion](#file-inclusion)
  - [Networking](#networking)
  - [Note Taking](#note-taking)
  - [Open Redirect](#open-redirect)
  - [OSINT](#osint)
  - [Proxy and Scanners](#proxy-and-scanners)
  - [Reversing](#reversing)
  - [Server-Side Request Forgery (SSRF)](#server-side-request-forgery)
  - [Social Engineering Tools](#social-engineering-tools)
  - [Steganography](#steganography)
  - [Subdomain](#subdomain)
  - [SQL Injection](#sql-injection)
  - [Template Injection](#template-injection)
  - [XML external entity (XXE) injection](#xml-external-entity-injection)
  - [Wordlists](#wordlists)
  - [Other Important](#other-important)

## Tools

### Active Directory

1. [NetExec](https://github.com/Pennyw0rth/NetExec)
2. [Responder](https://github.com/lgandx/Responder)
3. [BloodHound](https://github.com/BloodHoundAD/BloodHound)
4. [Impacket](https://github.com/SecureAuthCorp/impacket)
5. [Evil-WinRM](https://github.com/Hackplayers/evil-winrm)
6. [enum4linux](#enum4linux)

### Cloud Pentesting

1. [cloudfrunt](https://github.com/MindPointGroup/cloudfrunt)
2. [Bucket Finder](https://digi.ninja/projects/bucket_finder.php)
3. [CloudFail](https://github.com/m0rtem/CloudFail)

### Cryptography

1. [Hashidentifier: hashid](https://psypanda.github.io/hashID/)
2. [Ares](https://github.com/bee-san/Ares)
3. [quipqiup Auto Cipher Decoder](https://quipqiup.com/)
4. [CryptoS.py](https://raw.githubusercontent.com/ZishanAdThandar/pentest/main/scripts/cryptoS.py)
5. [Cipher Identifier](https://www.dcode.fr/cipher-identifier)
6. [Symbol Cipher List](https://www.dcode.fr/symbols-ciphers)
7. [Cook Decoder](https://gchq.github.io/CyberChef/)
8. [Cryptii](https://cryptii.com/)
9. [Hash Identifier](https://www.dcode.fr/hash-identifier)
10. [Zero Byte Decoder Online](https://neatnik.net/steganographr/)
11. [Zero Width Char Encoder 1](https://www.irongeek.com/i.php?page=security/unicode-steganography-homoglyph-encoder)
12. [Zero Width Char Encoder 2](https://330k.github.io/misc_tools/unicode_steganography.html)
13. [RSA CTF Tool](https://github.com/RsaCtfTool/RsaCtfTool)
14. [All ROT](https://theblob.org/rot.cgi)

### File Inclusion

1. [LFISuite](https://github.com/D35m0nd142/LFISuite)
2. [fimap](https://github.com/kurobeats/fimap)

### Networking

1. [NMap](https://github.com/nmap/nmap)
2. [rustscan](https://github.com/RustScan/RustScan)

### Note Taking

1. Cherry Tree FOSS Note Taking
2. [draw.io](https://app.diagrams.net)
3. EverNote Free

### Open Redirect

1. [Open Redirect Scanner](https://github.com/ak1t4/open-redirect-scanner)

### OSINT

1. [Name to Social Media](https://whatsmyname.app/)
2. [Face Image Search](https://pimeyes.com/en)
3. [Image Time](http://suncalc.net/)
4. [geospy.ai](https://geospy.ai/)
5. [Dark Web OSINT Tools](https://github.com/apurvsinghgautam/dark-web-osint-tools)
6. [Location](https://www.geoguessr.com/)
7. File Match Search: FileChef, File Search Engine, de digger, [SearchFiles.de](http://SearchFiles.de), NAPALM FTP Indexer, FileListing
8. [Telegram Bot List](https://telegramic.org/bots/)
9. News by Location: [Instagram Locations](https://www.instagram.com/explore/locations/?hl=en), [Snapchat Map](https://map.snapchat.com/)

### Proxy and Scanners

1. mitmproxy
2. Burp Suite
3. OWASP ZAP

### Reversing

1. [Radare GUI](https://github.com/rizinorg/cutter)
2. [dogbolt online reversing](https://dogbolt.org)

### Server-Side Request Forgery (SSRF)

1. [See-SURF](https://github.com/In3tinct/See-SURF)
2. [AllThingsSSRF](https://github.com/jdonsec/AllThingsSSRF)
3. [ssrf-sheriff](https://github.com/teknogeek/ssrf-sheriff)
4. Burpsuite Extension: Collaborator Everywhere

### Social Engineering Tools

1. [Fake SMS](https://github.com/machine1337/fake-sms)

### Steganography

1. [AperiSolve](https://www.aperisolve.com/)
2. strings file.wav
3. exiftool file.wav
4. exiv2 file.wav
5. foremost -i file.wav
6. binwalk --dd ".\*" file.wav
7. steghide extract -sf file.wav
8. [stegseek](https://github.com/RickdeJager/stegseek/releases)
9. outguess -r file.mp3 output.txt
10. [OpenStego](https://github.com/syvaidya/openstego/releases)
11. [Steganography (Image)](https://stylesuxx.github.io/steganography/)
12. [Image Steganography](https://incoherency.co.uk/image-steganography)
13. [Stegsolve](http://www.caesum.com/handbook/stego.htm)
14. python3 -m pip install stegpy
15. [WavSteg](https://github.com/ragibson/Steganography#WavSteg)
16. Spectogram Tools: Audacity, Sonic Visualiser, [Spectrum Analyzer](https://academo.org/demos/spectrum-analyzer/), [sciencemusic](https://spectrogram.sciencemusic.org/)

### Subdomain

1. `curl -s https://raw.githubusercontent.com/ZishanAdThandar/pentest/main/scripts/subauto.sh | bash -s domain.com`
2. `curl -s "http://web.archive.org/cdx/search/cdx?url=*.hackerone.com/*&output=text&fl=original&collapse=urlkey" | sort | sed -e 's_https*://__' -e "s//.//" -e 's/:.//' -e 's/^www.//' | uniq`
3. [Subdomain Takeover](https://github.com/antichown/subdomain-takeover)

### SQL Injection

1. [sqlmap](https://github.com/sqlmapproject/sqlmap)
2. [jSQL Injection](https://github.com/ron190/jsql-injection)

### Template Injection

1. [tplmap](https://github.com/epinna/tplmap)

### XML External Entity (XXE) Injection

1. [XXExploiter](https://github.com/luisfontes19/xxexploiter)
2. [XXEinjector](https://github.com/enjoiz/XXEinjector)
3. [oxml_xxe](https://github.com/BuffaloWill/oxml_xxe)
4. [xxer](https://github.com/TheTwitchy/xxer)

### Wordlists

1. [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)
2. [SecLists](https://github.com/danielmiessler/SecLists)
3. [FuzzDB](https://github.com/fuzzdb-project/fuzzdb)
4. [api worlist](https://github.com/chrislockard/api_wordlist)
5. rockyou.txt

### Other Important

1. [HackiFy Tools and Wordlists Auto Installer](https://github.com/ZishanAdThandar/hackify)
2. [CheatSheet-God](https://github.com/OlivierLaflamme/Cheatsheet-God)
3. [ctf-wiki](https://github.com/ctf-wiki/ctf-wiki)
4. [Awesome CTF](https://github.com/devploit/awesome-ctf-resources)
5. [Hacker101](https://github.com/Hacker0x01/hacker101)
6. [All CVE with PoC](https://github.com/trickest/cve)
