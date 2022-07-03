module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        "gatsby-plugin-react-helmet", 
        "gatsby-transformer-remark",
        "gatsby-plugin-mdx", 
        {
            resolve: 'gatsby-source-filesystem',
            __key: "pages",
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            __key: "blog-pages",
            options: {
              name: `blog-pages`,
              path: `${__dirname}/src/content/blog`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `${__dirname}/src/images/icon.png`
            }
        }
    ]
};