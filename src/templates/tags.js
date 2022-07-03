import * as React from 'react'

import { Link, graphql } from 'gatsby'
import {Helmet} from "react-helmet";
import BlogLayout from "../components/BlogLayout";

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `Post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`
    return (
        <>
            <Helmet title={tag}/>
            <BlogLayout>
                <Link to="/"><span role="img" aria-label="Backhand Index Pointing Left">👈 Back to Home</span></Link>
                <h1>{tagHeader}</h1>
                {edges.map(({ node }) => {
                    const { slug } = node.frontmatter
                    const { title } = node.frontmatter
                    return (
                        <li key={slug}>
                            <Link to={`/${slug}`}>{title}</Link>
                        </li>
                    )
                })}
            </BlogLayout>
        </>
    )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`