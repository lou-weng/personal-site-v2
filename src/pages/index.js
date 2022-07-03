import * as React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"

import '../styles/global.module.css'
import {graphql} from "gatsby";
import BlogPreviewComponent from "../components/BlogPreview";

// markup
const IndexPage = ({ data }) => {
    return (
        <>
            <Layout>
                <Header></Header>
                {data.allMarkdownRemark.nodes.map(node => {
                    return (
                        <BlogPreviewComponent
                            slug={node.frontmatter.slug}
                            title={node.frontmatter.title}
                            date={node.frontmatter.date}
                            excerpt={node.excerpt}
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
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 10) {
			nodes {
				excerpt
				frontmatter {
					slug
					title
					date(formatString: "MMMM DD, YYYY")
				}
			}
		}
    }
`
