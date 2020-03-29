module.exports = {
  siteMetadata: {
    title: 'The Gray Web Blog',
    description: `Steve's first attempt at a Gatsby Project`,
    author: `@savon40`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
  ],
}
