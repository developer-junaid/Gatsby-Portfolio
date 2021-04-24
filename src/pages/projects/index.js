import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

// Route for this page should be /projects
export default function Projects({ data }) {
  // Data
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  console.log(data)

  // Return
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created.</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link key={project.id} to={`/projects/${project.frontmatter.slug}`}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

// Page Query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }

    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
