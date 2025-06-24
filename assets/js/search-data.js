// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "dropdown-about-me",
              title: "About me",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog";
              },
            },{id: "post-what-is-xss-and-how-to-exploit-it",
        
          title: "What is XSS and How to Exploit it",
        
        description: "What is XSS and How we can find and exploit it",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/HowtoXSS/";
          
        },
      },{id: "projects-cookiesmonster",
          title: 'cookiesMonster 🍪',
          description: "A tool to collect cookies and show them in a web page.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_cookiesMonster/";
            },},{id: "projects-showusers",
          title: 'showusers',
          description: "Run it to show the active users from the GNU/Linux system and their info.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_showusers/";
            },},{id: "projects-evilseeker",
          title: 'EvilSeeker 🔭',
          description: "Tool for searching with google dorking in a faster and specific way with proxies or without proxies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_evilSeeker/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
