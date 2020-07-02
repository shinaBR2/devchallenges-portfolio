// Initialize dotenv
// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}` // or '.env'
// });

// And then you can use the config in gatsby-config.js
// const config = require('gatsby-plugin-config').default;

const siteMetadata = {
  title: 'ShinaBR2 - DevChallenges.io Portfolio',
  titleTemplate: '%s · The Real Hero',
  author: 'ShinaBR2',
  url: 'https://shinabr2-dcp.netlify.app',
  description: 'Portfolio challenge solution at DevChallenges.io from ShinaBR2',
  image: 'src/assets/images/share.png',
  twitterUsername: 'ShinaBR2'
};

const formatPlugins = ['gatsby-plugin-eslint'];

const PWAPlugins = [
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'pure-frontend',
      short_name: 'pure-frontend',
      start_url: '/',
      background_color: '#5C94E1',
      theme_color: '#5C94E1',
      display: 'minimal-ui',
      icon: 'src/assets/images/logo.png',
      icons: [
        {
          src: `/maskable_icon.png.png`,
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    }
  },
  'gatsby-plugin-offline'
];

const SSRPlugins = ['gatsby-plugin-react-helmet'];

const imagePlugins = ['gatsby-transformer-sharp', 'gatsby-plugin-sharp'];

const stylePlugins = ['gatsby-plugin-sass'];

const multiLangPlugin = [
  {
    resolve: `gatsby-plugin-intl`,
    options: {
      path: `${__dirname}/src/translations`,
      languages: ['en'],
      defaultLanguage: `en`,
      redirect: false
    }
  }
];

const mainPlugins = [
  {
    resolve: 'gatsby-plugin-material-ui'
  }
];

module.exports = {
  siteMetadata,
  plugins: [
    ...formatPlugins,
    ...PWAPlugins,
    ...SSRPlugins,
    ...imagePlugins,
    ...stylePlugins,
    ...multiLangPlugin,
    ...mainPlugins
  ]
};
