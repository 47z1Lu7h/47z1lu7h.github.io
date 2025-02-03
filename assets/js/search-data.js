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
  },{id: "nav-bl0g",
          title: "bl0g",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/page/:num/";
          },
        },{id: "nav-pentesting",
          title: "Pentesting",
          description: "Explora contenido sobre pruebas de penetración y metodologías.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hacking/pentesting/";
          },
        },{id: "nav-ctf",
          title: "CTF",
          description: "Explora desafíos de Capture The Flag y write-ups.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hacking/ctf/";
          },
        },{id: "nav-wireless",
          title: "Wireless",
          description: "Explora contenido sobre hacking de redes inalámbricas.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hacking/wireless/";
          },
        },{id: "nav-h4ck1n6",
          title: "h4Ck1n6",
          description: "A growing collection of hacking stuff...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hacking/";
          },
        },{id: "nav-wireless",
          title: "Wireless",
          description: "Explora contenido sobre hacking de redes inalámbricas.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hacking/reverse-shells.md";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Have a look at my repositories :)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/r3p0s/";
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
    },{id: "post-ldap-injection",
      
        title: "LDAP Injection",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/ldap-injection/";
        
      },
    },{id: "post-idor",
      
        title: "Idor",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/idor/";
        
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
