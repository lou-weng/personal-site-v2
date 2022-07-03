const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            postsRemark: allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
            tagsGroup: allMarkdownRemark(limit: 2000) {
                group(field: frontmatter___tags) {
                  fieldValue
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild("Error on running graphql query")
        return
    }

    const blogPostTemplate = path.resolve("src/templates/blogPostTemplate.js")
    const tagTemplate = path.resolve("src/templates/tags.js")

    const posts = result.data.postsRemark.edges

    posts.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: blogPostTemplate,
            context: {
                slug: node.frontmatter.slug
            }
        })
    })

    const tags = result.data.tagsGroup.group

    tags.forEach(tag => {
        createPage({
            path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
            component: tagTemplate,
            context: {
                tag: tag.fieldValue,
            },
        })
    })
}
