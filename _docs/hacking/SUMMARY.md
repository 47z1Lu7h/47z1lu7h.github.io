---
layout: page
title: Summary
permalink: /docs/hacking/cheetsheets/
category: 
img: assets/img/hacking/summary.webp
toc:
  sidebar: left
---

## Recon

---

* [Public info gathering](recon/public-info-gathering)
* [Root domains](recon/domain-enum)
* [Subdomain Enum](recon/subdomain-enum/)
* [Webs recon](recon/webs-recon)
* [Network Scanning](recon/network-scanning)
* [Host Scanning](recon/host-scanning)
* [Packet Scanning](recon/packet-scanning)


## Enumeration

---

* [Files](enum/files)
* [SSL/TLS](enum/ssl-tls)
* [Ports](enum/ports)
* [Web Attacks](enum/web/README)
  * [General Info](enum/web/general-info)
  * [Quick tricks](enum/web/quick-tricks)
  * [Header injections](enum/web/header-injections)
  * [Bruteforcing](enum/web/bruteforcing)
  * [Online hashes cracked](enum/web/online-hashes-cracked)
  * [Crawl/Fuzz](enum/web/crawl-fuzz)
  * [LFI/RFI](enum/web/lfi-rfi)
  * [File upload](enum/web/upload-bypasses)
  * [SQLi](enum/web/sqli)
  * [SSRF](enum/web/ssrf)
  * [Open redirects](enum/web/open-redirects)
  * [XSS](enum/web/xss)
  * [CSP](enum/web/csp)
  * [XXE](enum/web/xxe)
  * [Cookie Padding](enum/web/cookie-padding)
  * [Webshells](enum/web/web-shells)
  * [CORS](enum/web/cors)
  * [CSRF](enum/web/csrf)
  * [Web Cache Poisoning](enum/web/web-cache-poisoning)
  * [Broken Links](enum/web/broken-links)
  * [Clickjacking](enum/web/clickjacking)
  * [HTTP Request Smuggling](enum/web/request-smuggling)
  * [Web Sockets](enum/web/web-sockets)
  * [CRLF](enum/web/crlf)
  * [IDOR](enum/web/idor)
  * [Web Cache Deception](enum/web/web-cache-deception)
  * [Session fixation](enum/web/session-fixation)
  * [Email attacks](enum/web/email-attacks)
  * [Pastejacking](enum/web/pastejacking)
  * [HTTP Parameter pollution](enum/web/parameter-pollution)
  * [SSTI](enum/web/ssti)
  * [Prototype Pollution](enum/web/prototype-pollution)
  * [Command Injection](enum/web/command-injection)
  * [Deserialization](enum/web/deserialization)
  * [DNS rebinding](enum/web/dns-rebinding)
* [Web Technologies](enum/webservices/README)
  * [APIs](enum/webservices/apis)
  * [JS](enum/webservices/js)
  * [ASP.NET](enum/webservices/.net)
  * [JWT](enum/webservices/jwt)
  * [GitHub](enum/webservices/github)
  * [GitLab](enum/webservices/gitlab)
  * [WAFs](enum/webservices/wafs)
  * [Firebird](enum/webservices/firebird)
  * [Wordpress](enum/webservices/wordpress)
  * [WebDav](enum/webservices/webdav)
  * [Joomla](enum/webservices/joomla)
  * [Jenkins](enum/webservices/jenkins)
  * [IIS](enum/webservices/iis)
  * [VHosts](enum/webservices/vhosts)
  * [Firebase](enum/webservices/firebase)
  * [OWA](enum/webservices/owa)
  * [OAuth](enum/webservices/oauth)
  * [Flask](enum/webservices/flask)
  * [Symfony && Twig](enum/webservices/symfony-and-and-twig)
  * [Drupal](enum/webservices/drupal)
  * [NoSQL (MongoDB, CouchDB)](enum/webservices/nosql-and-and-mongodb)
  * [PHP](enum/webservices/php)
  * [RoR (Ruby on Rails)](enum/webservices/ror-ruby-on-rails)
  * [JBoss - Java Deserialization](enum/webservices/jboss-java-deserialization)
  * [OneLogin - SAML Login](enum/webservices/onelogin-saml-login)
  * [Flash SWF](enum/webservices/flash-swf)
  * [Nginx](enum/webservices/nginx)
  * [Python](enum/webservices/python)
  * [Tomcat](enum/webservices/tomcat)
  * [Adobe AEM](enum/webservices/adobe-aem)
  * [Magento](enum/webservices/magento)
  * [SAP](enum/webservices/sap)
  * [MFA/2FA](enum/webservices/mfa)
  * [GWT](enum/webservices/gwt)
  * [Jira](enum/webservices/jira)
  * [OIDC (Open ID Connect)](enum/webservices/oidc-open-id-connect)
  * [ELK](enum/webservices/elk)
  * [Sharepoint](enum/webservices/sharepoint)
  * [others](enum/webservices/others)
* [Cloud](enum/cloud/README)
  * [General](enum/cloud/general)
  * [Cloud Info Gathering](enum/cloud/cloud-info-recon)
  * [AWS](enum/cloud/aws)
  * [Azure](enum/cloud/azure)
  * [GCP](enum/cloud/gcp)
  * [Docker && Kubernetes](enum/cloud/docker-and-and-kubernetes)
  * [CDN - Comain Fronting](enum/cloud/cdn-comain-fronting)

## Exploitation

---

* [Payloads](exploitation/payloads)
* [Reverse Shells](exploitation/reverse-shells)
* [File transfer](exploitation/file-transfer)

## Post Exploitation

---

* [Linux](post-exploitation/linux)
* [Pivoting](post-exploitation/pivoting)
* [Windows](post-exploitation/windows/README)
  * [AD](post-exploitation/windows/ad/README)
    * [Kerberos](post-exploitation/windows/ad/kerberos-attacks)
  * [PS tips & tricks](post-exploitation/windows/ps-tips-and-tricks)

## Mobile

---

* [General](mobile/general)
* [Android](mobile/android)
* [iOS](mobile/ios)

## others

---

* [Burp Suite](others/burp)
* [Password cracking](others/password-cracking)
* [VirtualBox](others/virtualbox)
* [LLM/AI/ML/prompt testing](others/llm-ai-ml-prompt-testing)
* [Code review](others/code-review)
* [Pentesting Web checklist](others/web-checklist)
* [Internal Pentest](others/internal-pentest)
* [Web fuzzers review](others/web-fuzzers-comparision)
* [Recon suites review](others/recon-suites-review)
* [Subdomain tools review](others/subdomain-tools-review)
* [Random](others/dictionaries)
* [Master assessment mindmaps](others/master-assessment-mindmap)
* [BugBounty](others/bugbounty)
* [Exploiting](others/exploiting)
* [tools everywhere](others/tools-everywhere)
