import * as React from 'react'
import { Link } from 'gatsby'

const BlogPreviewComponent = (props) => {
    return(
        <>
            <div>
                <div>
                    <h3><Link to={props.slug}>{props.date} - {props.title}</Link></h3>
                    <p>{props.excerpt} <Link to={props.slug}>Read More</Link></p>
                </div>
            </div>
        </>
    )
}

export default BlogPreviewComponent
