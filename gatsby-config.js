module.exports = {
  siteMetadata: {
    title: 'WeatherSpy',
    author: 'Rob Abby',
    description: 'An application to view the weather',
    siteUrl: 'https://weatherspy.robabby.com',
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify'
  ],
};
