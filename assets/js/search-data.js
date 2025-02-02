// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-h0m3",
    title: "h0m3",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-pentesting",
          title: "Pentesting",
          description: "Explora mis publicaciones sobre pentesting, metodologías y herramientas.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/pentesting/";
          },
        },{id: "dropdown-about",
              title: "about",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-news",
              title: "news",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-hacking",
              title: "hacking",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-categories",
              title: "categories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-brute-force-attack",
      
        title: "Brute Force Attack",
      
      description: "A brute force attack is a hacking method that uses trial and error to crack passwords, login credentials, and encryption keys. It is a simple yet reliable tactic for gaining unauthorized access to individual accounts and organizations&#39; systems and networks.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/BruteForce/";
        
      },
    },{id: "post-how-to-aproach-ctf-39-s",
      
        title: "How to aproach CTF&#39;s",
      
      description: "How to of getting into CTF&#39;s challenges",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/how-to-aproach-CTF's/";
        
      },
    },{id: "post-smt",
      
        title: "smt",
      
      description: "Transmitting a file from your computer to another computer.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/satisfiability-modulo-theories-smt-z3/";
        
      },
    },{id: "post-reversing-tools",
      
        title: "reversing tools",
      
      description: "Transmitting a file from your computer to another computer.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/reversing-tools/";
        
      },
    },{id: "post-file-upload",
      
        title: "file-upload",
      
      description: "Transmitting a file from your computer to another computer.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/cheat-engine/";
        
      },
    },{id: "post-file-upload",
      
        title: "file-upload",
      
      description: "Transmitting a file from your computer to another computer.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/blobrunner/";
        
      },
    },{id: "post-shells-windows",
      
        title: "Shells - Windows",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/windows/";
        
      },
    },{id: "post-reverse-shells",
      
        title: "reverse shells",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/reverse-shell/";
        
      },
    },{id: "post-msfvenom",
      
        title: "MSFVenom",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/msfvenom/";
        
      },
    },{id: "post-shells-linux",
      
        title: "Shells - Linux",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/linux/";
        
      },
    },{id: "post-fully-ttys",
      
        title: "fully ttys",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/full-ttys/";
        
      },
    },{id: "post-expose-local-to-the-internet",
      
        title: "Expose local to the internet",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/expose-local-to-the-internet/";
        
      },
    },{id: "post-xxe-xee-xml-external-entity",
      
        title: "XXE - XEE - XML External Entity",
      
      description: "Transmitting a file from your computer to another computer.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/xxe-xee-xml-external-entity/";
        
      },
    },{id: "post-xssi",
      
        title: "XSSI",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/xssi-cross-site-script-inclusion/";
        
      },
    },{id: "post-xslt-server-side-injection",
      
        title: "XSLT Server Side Injection",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/xslt-server-side-injection-extensible-stylesheet-language-transformations/";
        
      },
    },{id: "post-xs-search-xs-leaks",
      
        title: "XS-Search/XS-Leaks",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/xs-search/";
        
      },
    },{id: "post-xpath-injection",
      
        title: "XPATH injection",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/xpath-injection/";
        
      },
    },{id: "post-websocket-attacks",
      
        title: "WebSocket Attacks",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/websocket-attacks/";
        
      },
    },{id: "post-web-vulnerabilities-methodology",
      
        title: "Web Vulnerabilities Methodology",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/web-vulnerabilities-methodology/";
        
      },
    },{id: "post-web-tool-wfuzz",
      
        title: "Web Tool - WFuzz",
      
      description: "Transmitting a file from your computer to another computer.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/web-tool-wfuzz/";
        
      },
    },{id: "post-uuid-insecurities",
      
        title: "UUID Insecurities",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/uuid-insecurities/";
        
      },
    },{id: "post-timing-attacks",
      
        title: "Timing Attacks",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/timing-attacks/";
        
      },
    },{id: "post-erver-side-inclusion-edge-side-inclusion-injectio",
      
        title: "erver Side Inclusion/Edge Side Inclusion Injectio",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/server-side-inclusion-edge-side-inclusion-injection/";
        
      },
    },{id: "post-reverse-tab-nabbing",
      
        title: "Reverse Tab Nabbing",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/reverse-tab-nabbing/";
        
      },
    },{id: "post-reset-forgotten-password-bypass",
      
        title: "Reset/Forgotten Password Bypass",
      
      description: "Transmitting a file from your computer to another computer.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/reset-password/";
        
      },
    },{id: "post-regular-expression-denial-of-service-redos",
      
        title: "Regular expression Denial of Service - ReDoS",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/regular-expression-denial-of-service-redos/";
        
      },
    },{id: "post-registration-amp-takeover-vulnerabilities",
      
        title: "Registration &amp; Takeover Vulnerabilities",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/registration-vulnerabilities/";
        
      },
    },{id: "post-rate-limit-bypass",
      
        title: "Rate Limit Bypass",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/rate-limit-bypass/";
        
      },
    },{id: "post-rare-condition",
      
        title: "Rare Condition",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/race-condition/";
        
      },
    },{id: "post-proxy-waf-protections-bypass",
      
        title: "Proxy / WAF Protections Bypass",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/proxy-waf-protections-bypass/";
        
      },
    },{id: "post-phone-number-injections",
      
        title: "Phone Number Injections",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/phone-number-injections/";
        
      },
    },{id: "post-parameter-pollution-json-injection",
      
        title: "Parameter Pollution | JSON Injection",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/parameter-pollution/";
        
      },
    },{id: "post-orm-injection",
      
        title: "ORM Injection",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/orm-injection/";
        
      },
    },{id: "post-open-redirect",
      
        title: "Open Redirect",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/open-redirect/";
        
      },
    },{id: "post-oauth-to-account-takeover",
      
        title: "OAuth to Account takeover",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/oauth-to-account-takeover/";
        
      },
    },{id: "post-nosql-injection",
      
        title: "NoSQL Injection",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/nosql-injection/";
        
      },
    },{id: "post-ldap-injection",
      
        title: "LDAP Injection",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/ldap-injection/";
        
      },
    },{id: "post-xssi",
      
        title: "XSSI",
      
      description: "Transmitting a file from your computer to another computer.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/iframe-traps/";
        
      },
    },{id: "post-idor",
      
        title: "Idor",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/idor/";
        
      },
    },{id: "post-http-response-smuggling-desync",
      
        title: "HTTP Response Smuggling / Desync",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/http-response-smuggling-desync/";
        
      },
    },{id: "post-http-connection-request-smuggling",
      
        title: "HTTP Connection Request Smuggling",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/http-connection-request-smuggling/";
        
      },
    },{id: "post-http-connection-contamination",
      
        title: "HTTP Connection Contamination",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/http-connection-contamination/";
        
      },
    },{id: "post-jwt-vulnerabilities-json-web-tokens",
      
        title: "JWT Vulnerabilities (Json Web Tokens)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/hacking-jwt-json-web-tokens/";
        
      },
    },{id: "post-pentesting-grpc-web",
      
        title: "Pentesting gRPC-Web",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/grpc-web-pentest/";
        
      },
    },{id: "post-formula-csv-doc-latex-ghostscript-injection",
      
        title: "Formula/CSV/Doc/LaTeX/GhostScript Injection",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/formula-csv-doc-latex-ghostscript-injection/";
        
      },
    },{id: "post-email-injections",
      
        title: "Email Injections",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/email-injections/";
        
      },
    },{id: "post-domain-subdomain-takeover",
      
        title: "Domain/Subdomain takeover",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/domain-subdomain-takeover/";
        
      },
    },{id: "post-dependency-confusion",
      
        title: "Dependency Confusion",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/dependency-confusion/";
        
      },
    },{id: "post-csrf-cross-site-request-forgery",
      
        title: "CSRF (Cross Site Request Forgery)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/csrf-cross-site-request-forgery/";
        
      },
    },{id: "post-crlf-0d-0a-injection",
      
        title: "CRLF (%0D%0A) Injection",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/crlf-0d-0a/";
        
      },
    },{id: "post-cors-misconfigurations-amp-bypass",
      
        title: "CORS - Misconfigurations &amp; Bypass",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/cors-bypass/";
        
      },
    },{id: "post-command-injection",
      
        title: "Command Injection",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/command-injection/";
        
      },
    },{id: "post-client-side-template-injection-csti",
      
        title: "Client Side Template Injection (CSTI)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/client-side-template-injection-csti/";
        
      },
    },{id: "post-client-side-path-traversal",
      
        title: "Client Side Path Traversal",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/client-side-path-traversal/";
        
      },
    },{id: "post-clickjacking",
      
        title: "Clickjacking",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/clickjacking/";
        
      },
    },{id: "post-captcha-bypass",
      
        title: "Captcha Bypass",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/captcha-bypass/";
        
      },
    },{id: "post-bypass-payment-process",
      
        title: "Bypass Payment Process",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/bypass-payment-process/";
        
      },
    },{id: "post-account-takeover",
      
        title: "Account Takeover",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/account-takeover/";
        
      },
    },{id: "post-hop-by-hop-headers",
      
        title: "hop-by-hop headers",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/abusing-hop-by-hop-headers/";
        
      },
    },{id: "post-2fa-mfa-otp-bypass",
      
        title: "2FA/MFA/OTP Bypass",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/2fa-bypass/";
        
      },
    },{id: "post-h2c-smuggling",
      
        title: "H2c Smuggling",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/h2c-smuggling/";
        
      },
    },{id: "post-write-up-machine-keeper-hackthebox-easy",
      
        title: "Write Up Machine Keeper, Hackthebox - Easy",
      
      description: "write up easy machine Keeper - hackthebox",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/writeUp-keeper/";
        
      },
    },{id: "post-how-to-play-hackthebox-com",
      
        title: "how to play hackthebox.com",
      
      description: "write up machine broker",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/how-to-play-hackthebox/";
        
      },
    },{id: "news-science-of-the-heart",
          title: 'Science of the Heart',
          description: "Electromagnetic field of the heart",
          section: "News",handler: () => {
              window.location.href = "/news/Science_of_the_Heart/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-ad",
          title: 'AD',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ActiveDirectory/";
            },},{id: "projects-p3nt3st1ng",
          title: 'P3nt3st1ng',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AllAboutPentesting/";
            },},{id: "projects-dns",
          title: 'DNS',
          description: "eeeelaa pee",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DNS/";
            },},{id: "projects-tools",
          title: 'tools',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/TOOLS/";
            },},{id: "projects-alien-wisdom",
          title: 'Alien Wisdom',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bashar/";
            },},{id: "projects-mathjax",
          title: 'mathJax',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mathJax/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tres/";
            },},{id: "projects-win-enum",
          title: 'win enum',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/windows_enum/";
            },},{id: "projects-hashdump",
          title: 'hashdump',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/windows_hashdump/";
            },},{id: "projects-win-priv-esc",
          title: 'win priv esc',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/windows_priv_esc/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/47z1Lu7h", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/47z1lu7h", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://app.hackthebox.com/profile/642903", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/47z1lu7h", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/4tz1luth", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
