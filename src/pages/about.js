import * as React from "react"
import { graphql } from "gatsby"

import PostLayout from "../components/postLayout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <PostLayout location={location} title={siteTitle}>
      <h1>About</h1>
      <p> TODO </p>
    </PostLayout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
