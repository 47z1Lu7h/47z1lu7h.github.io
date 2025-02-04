// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-h0m3",
    title: "H0m3",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bl0g",
          title: "Bl0g",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/page/:num/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Have a look at my repositories :)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/r3p0s/";
          },
        },{id: "nav-cv",
          title: "Cv",
          description: "This is my curriculum.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
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
            },{id: "dropdown-projects",
              title: "projects",
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
