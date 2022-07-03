import * as React from "react";

import "../styles/blog.module.css"
import {graphql, Link} from "gatsby";
import { Helmet } from "react-helmet";

import "../styles/blog.module.css"
import BlogLayout from "../components/BlogLayout";
import TagPill from "../components/TagPill";

const BlogPostTemplate = ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <>
            <Helmet title={frontmatter.title}/>
            <BlogLayout>
                <Link to="/"><span role="img" aria-label="Backhand Index Pointing Left">👈 Back to Home</span></Link>
                <div>
                    <h1>{frontmatter.title}</h1>
                    <h4>{frontmatter.date}</h4>
                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
                    <hr />
                    <div>
                        <h5>Tags</h5>
                        {frontmatter.tags.map(tag => <TagPill tagName={tag}></TagPill>)}
                    </div>
                </div>
            </BlogLayout>
        </>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                tags
            }
        }
    }
    `

export default BlogPostTemplate