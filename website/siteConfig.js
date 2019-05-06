const users = [
  {
    caption: 'User',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.paraboly.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Paraboly Developers',
  tagline: 'Paraboly for Developers',
  url: 'https://developer.paraboly.com', 
  baseUrl: '/',
  projectName: 'developer.paraboly',
  organizationName: 'paraboly',
  headerLinks: [
    {doc: 'intro', label: 'Docs'},
    //{doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],
  users,
  headerIcon: 'img/paraboly/logo-xs.png',
  footerIcon: 'img/paraboly/logo-xs.png',
  favicon: 'img/favicons/favicon.ico',
  colors: {
    primaryColor: '#2f4050',
    secondaryColor: '#2f4050e6',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */
  copyright: `Copyright © ${new Date().getFullYear()} Paraboly`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  enableUpdateBy: true,
  enableUpdateTime: true,
  repoUrl: 'https://github.com/paraboly/developer',
  facebookAppId: 2155689894546387
};

module.exports = siteConfig;
