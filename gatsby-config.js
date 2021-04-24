/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    // Markdown Remarker
    "gatsby-transformer-remark",
    // Image Optimizers
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    // Gatsby filesystem for projects
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    // Gatsby filesystem for images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Gatsby Portfolio",
    description: "web dev portfolio",
    copyright: "This website is copyright 2021 Developer Junaid",
    contact: "developerjunaid623@gmail.com",
  },
}
