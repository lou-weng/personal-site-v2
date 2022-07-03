import * as React from 'react'

import { blogLayoutContainer } from "../styles/blog.module.css"

const BlogLayout = ({ children }) => {
    return (
        <>
            <div className={blogLayoutContainer}>
                { children }
            </div>
        </>
    )
}

export default BlogLayout