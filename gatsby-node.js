const path = require("path")

// Create Pages (Async)
exports.createPages = async ({ graphql, actions }) => {
  // Get Data
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  // Logic to Create Pages
  data.allMarkdownRemark.nodes.map(node => {
    // Create Page
    actions.createPage({
      // Options
      path: "/projects/" + node.frontmatter.slug, // Route
      component: path.resolve("./src/templates/project-details.js"), // Component (Template)
      context: { slug: node.frontmatter.slug }, // Data Passed (Query Variable)
    })
  })
}
