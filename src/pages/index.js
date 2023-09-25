import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  
  const blog_entries = posts.map(post => {    
    const image = getImage(post.frontmatter.thumbnail)
    const author = post.frontmatter.author
    const title = post.frontmatter.title
    const link = post.fields.slug
    const excerpt = post.excerpt
    return(
      <div className="rounded border-2 group grid hover:shadow-md transition-shadow ease-in">
          <GatsbyImage className="row-start-1 col-start-1" loading="eager" imgStyle={{objectFit:"cover"}} image={getImage(image)} alt="" />
          <div className="p-2 row-start-1 col-start-1 z-20 transition-all ease-in bg-white bg-opacity-50 md:bg-transparent md:group-hover:bg-white md:group-hover:bg-opacity-50">
            <Link to={link} itemProp="url">
              <div className=" transition-all ease-in md:opacity-0 md:group-hover:opacity-100">
                <h3 className="">{title}</h3>
                <p className="text-black">{excerpt}</p>
              </div>
            </Link>
          </div>
        </div>
    )});
    // <div className="hidden group-hover:block absolute z-10 -top-10 left-0">


  return (
    <Layout location={location} title={siteTitle}>
      <div className="grid gap-2 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
          {blog_entries}
      </div>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: NO_CHANGE
                pngOptions: {quality: 50}
              )
            }
          }
        }
      }
    }
  }
`
