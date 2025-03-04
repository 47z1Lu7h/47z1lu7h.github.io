---
layout: page
title: Burp-Sutite
nav: true
nav_order: 5
category: others
toc:
  sidebar: left
---

# Burp Suite

## Tips

- If Render Page crash:
  sudo sysctl -w kernel.unprivileged_userns_clone=1

- If embedded browser crash due sandbox:
  find .BurpSuite -name chrome-sandbox -exec chown root:root {} \; -exec chmod 4755 {} \;

- Scope with all subdomains:
  .\*\.test\.com$

- Use Intruder to target specific parameters for scanning
  - Right click: actively scan defined insertion points

# Configuration

- Project Options -> HTTP -> Redirections -> Enable JavaScript-driven
- User Options -> Misc -> Proxy Interception -> Always disabled
- Target -> Site Map -> Show all && Show only in-scope items

# XSS Validator extension

1. Start xss.js phantomjs $HOME/.BurpSuite/bapps/xss.js
2. Send Request to Intruder
3. Mark Position
4. Import xss-payload-list from $Tools into xssValidator
5. Change Payload Type to Extension Generated
6. Change Payload Process to Invoke-Burp Extension - XSS Validator
7. Add Grep-Match rule as per XSS Validator
8. Start.

# Filter the noise

https://gist.github.com/vsec7/d5518a432b70714bedad79e4963ff320

# Filter the noise TLDR

# TLS Pass Through

._\.google\.com
._\.gstatic\.com
._\.googleapis\.com
._\.pki\.goog
.\*\.mozilla\.com

# Send swagger to burp

https://github.com/RhinoSecurityLabs/Swagger-EZ

# Hosted:

https://rhinosecuritylabs.github.io/Swagger-EZ/

# If some request/response breaks or slow down Burp

- Project options -> HTTP -> Streaming responses -> Add url and uncheck "Store streaming responses...."

# Burp Extension rotate IP yo avoid IP restrictions

https://github.com/RhinoSecurityLabs/IPRotate_Burp_Extension

# Collab/SSRF/pingback alternative

interactsh.com
ceye.io
requestcatcher.com
canarytokens.org
webhook.site
ngrok.com
pingb.in
swin.es
requestbin.net
ssrftest.com
rbnd.gl0.eu
dnslog.cn
beeceptor.com

<br>

### Run private collaborator instance in AWS

[AWSBurpCollaborator](https://github.com/Leoid/AWSBurpCollaborator)

<br>

### Run your own collab server

[pwn-machine](https://github.com/yeswehack/pwn-machine)

# Wordlist from burp project file

cat project.burp | strings | tok | sort -u > custom_wordlist.txt

# Autorize:

    1. Copy cookies from low priv user and paste in Autorize
    2. Set filters (scope, regex)
    3. Set Autorize ON
    4. Navigate as high priv user

# Turbo Intruder

basic.py -> Set %s in the injection point and specify wordlist in script
multipleParameters.py -> Set %s in all the injection points and specify the wordlists in script

# Match and Replace

https://github.com/daffainfo/match-replace-burp

# Customize Audit Scans

Configure your audit profile -> Issues reported -> Individual issues -> right-click on "Extension generated issues" -> "Edit detection methods"
Works on most of issues like SQLi

# Send to local Burp from VPS

# In local computer

ssh -R 8080:127.0.0.1:8080 root@VPS_IP -f -N

# In VPS

curl URL -x http://127.0.0.1:8080

# Ip rotation

https://github.com/ustayready/fireprox

```

## Preferred extensions

(https://portswigger.net/blog/make-burp-suite-your-own-high-powered-extensibility-to-customize-and-enhance-your-testing)

(https://github.com/Ignitetechnologies/BurpSuite-For-Pentester)

* [Burp Bounty Pro](https://burpbounty.net/): Active and passive checks customizable based on patterns.
* [Active Scan ++](https://portswigger.net/bappstore/3123d5b5f25c4128894d97ea1acc4976) More active and passive scans.
* [Software Vulnerability Scanner](https://portswigger.net/bappstore/c9fb79369b56407792a7104e3c4352fb) Passive scan to detect vulnerable software versions
* [Param Miner](https://portswigger.net/bappstore/17d2949a985c4b7ca092728dba871943) Passive scan to detect hidden or unlinked parameters, cache poisoning
* [Backslash Powered Scanner](https://portswigger.net/bappstore/9cff8c55432a45808432e26dbb2b41d8) Active scan for SSTI detection
* [CSRF Scanner](https://portswigger.net/bappstore/60f172f27a9b49a1b538ed414f9f27c3) Passive CSRF detection
* [Freddy](https://portswigger.net/bappstore/ae1cce0c6d6c47528b4af35faebc3ab3) Active and Passive scan for Java and .NET deserialization
* [JSON Web Tokens](https://portswigger.net/bappstore/f923cbf91698420890354c1d8958fee6) decode and manipulate JSON web tokens
* [Reissue Request Scripter](https://portswigger.net/bappstore/6e0b53d8c801471c9dc614a016d8a20d) generates scripts for Python, Ruby, Perl, PHP and PowerShell
* [Burp-exporter](https://github.com/artssec/burp-exporter) other extension for export request to multiple languages
* [Retire.js](https://portswigger.net/bappstore/36238b534a78494db9bf2d03f112265c) Passive scan to find vulnerable JavaScript libraries
* [Web Cache Deception Scanner](https://portswigger.net/bappstore/7c1ca94a61474d9e897d307c858d52f0) Active scan for Web Cache Deception vulnerability
* [Cookie decrypter](https://portswigger.net/bappstore/76c500c3fdba4a37a6fca46fe18d8ada) Passive check for decrypt/decode Netscaler, F5 BigIP, and Flask cookies
* [Reflector](https://github.com/elkokc/reflector) Passive scan to find reflected XSS
* [J2EEScan](https://portswigger.net/bappstore/7ec6d429fed04cdcb6243d8ba7358880) Active checks to discover different kind of J2EE vulnerabilities
* [HTTP Request Smuggler](https://portswigger.net/bappstore/aaaa60ef945341e8a450217a54a11646) Active scanner and launcher for HTTP Request Smuggling attacks
* [Flow](https://portswigger.net/bappstore/ee1c45f4cc084304b2af4b7e92c0a49d) History of all burp tools, extensions and tests
* [Taborator](https://portswigger.net/bappstore/c9c37e424a744aa08866652f63ee9e0f) Allows Burp Collaborator in a new tab
* [Turbo Intruder](https://portswigger.net/bappstore/9abaa233088242e8be252cd4ff534988) Useful for sending large numbers of HTTP requests (Race cond, fuzz, user enum)
* [Auto Repeater](https://portswigger.net/bappstore/f89f2837c22c4ab4b772f31522647ed8) Automatically repeats requests with replacement rules and response diffing
* [Upload Scanner](https://portswigger.net/bappstore/b2244cbb6953442cb3c82fa0a0d908fa) Tests multiple upload vulnerabilities
* [poi Slinger](https://github.com/portswigger/poi-slinger): Active scan check to find PHP object injection
* [Java Deserialization Scanner](https://portswigger.net/bappstore/228336544ebe4e68824b5146dbbd93ae) Active and passive scanner to find Java deserialization vulnerabilities
* [Autorize](https://portswigger.net/bappstore/f9bbac8c4acf4aefa4d7dc92a991af2f) Used to detect IDORs
* [Match/Replace Session Action](https://portswigger.net/bappstore/9b5c532966ca4d5eb13c09c72ba7aac2) Provides a match and replace function as a Session Handling Rule.
* [.NET Beautifier](https://portswigger.net/bappstore/e2a137ad44984ccb908375fa5b2c618d) Easy view for VIEWSTATE parameter
* [Wsdler](https://portswigger.net/bappstore/594a49bb233748f2bc80a9eb18a2e08f) generates SOAP requests from WSDL request
* [Collaborator Everywhere](https://portswigger.net/bappstore/2495f6fb364d48c3b6c984e226c02968) Inject headers to reveal backend systems by causing pingbacks
* [Collabfiltrator](https://github.com/0xC01DF00D/Collabfiltrator) Exfiltrate blind remote code execution output over DNS
* [Bypass WAF](https://portswigger.net/bappstore/ae2611da3bbc4687953a1f4ba6a4e04c) Add some headers to bypass some WAFs
* [SAMLRaider](https://github.com/CompassSecurity/SAMLRaider) for testing SAML infrastructures, messages and certificates
* [GoldenNuggets-1](https://github.com/GainSec/GoldenNuggets-1) create wordlists from target
* [Logger++](https://portswigger.net/bappstore/470b7057b86f41c396a97903377f3d81) Log for every burp tool and allows highlight, filter, grep, export...
* [OpenAPI Parser](https://portswigger.net/bappstore/6bf7574b632847faaaa4eb5e42f1757c) Parse and fetch OpenAPI documents directly from a URL
* [CO2](https://github.com/portswigger/co2): Multiple functions such sqlmapper, cewler
* [XSSValidator](https://github.com/PortSwigger/xss-validator): XSS intruder payload generator and checker
* [Shelling](https://github.com/ewilded/shelling): command injection payload generator
* [burp-send-to](https://github.com/bytebutcher/burp-send-to): Adds a customizable "Send to..."-context-menu.
* [ssrf-king](https://github.com/ethicalhackingplayground/ssrf-king?s=09): Automates SSRF detection

## Private collaborator server

(https://github.com/putsi/privatecollaborator)

(https://blog.roughwire.com/?p=24)

(https://teamrot.fi/self-hosted-burp-collaborator-with-custom-domain)

## Burp macros

(https://akshita-infosec.medium.com/burp-macros-what-why-how-151df8901641)

## Collaborator SSRF explotation [mindmap](https://github.com/iustin24/SSRF)

![](<../.gitbook/assets/image (20).png>)

<br>

### DOM Invader

(https://caramel-calcium-f39.notion.site/DOM-Invader-1a78e4ba7acc4ca3987b8136bcf1ddd5)
```
