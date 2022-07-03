import * as React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"

import '../styles/global.module.css'
import {graphql} from "gatsby";
import BlogPreviewComponent from "../components/BlogPreview";

// markup
const IndexPage = ({ data }) => {
    const { pageQuery } = data

    return (
        <>
            <Layout>
                <Header></Header>
                {pageQuery.nodes.map(node => {
                    return (
                        <BlogPreviewComponent
                            slug={node.frontmatter.slug}
                            title={node.frontmatter.title}
                            date={node.frontmatter.date}
                            excerpt={node.excerpt}
                            tags={node.frontmatter.tags}
                        />
                    )
                })}
            </Layout>
        </>
    )
}

export default IndexPage

export const query = graphql`
    query BlogPagePreview {
        pageQuery: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 10) {
			nodes {
				excerpt
				frontmatter {
					slug
					title
					date(formatString: "MMMM DD, YYYY")
					tags
				}
			}
		}
    }
`
