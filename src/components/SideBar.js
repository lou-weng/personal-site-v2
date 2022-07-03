import * as React from 'react'
import TagPill from "./TagPill";

import {sideBar} from "../styles/layout.module.css"
import {graphql, StaticQuery} from "gatsby";

const SideBar = () => {
    return (
        <StaticQuery
            query = {graphql`
                query {
                    allMarkdownRemark {
                        group(field: frontmatter___tags) {
                            fieldValue
                            totalCount
                        }
                    }
                }
            `}
            render = { data =>
                <div className={sideBar}>
                    <h3>Tags</h3>
                    <hr/>
                    {data.allMarkdownRemark.group.map(tag => <TagPill tagName={tag.fieldValue} />)}
                </div>
            }
        />
    )
}

export default SideBar