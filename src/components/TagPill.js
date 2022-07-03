import * as React from 'react'

import {tagPill} from "../styles/tag.module.css"
import {Link} from "gatsby";
import {kebabCase} from "lodash";

const TagPill = (props) => {
    return (
        <p className={tagPill}><Link to={`/tags/${kebabCase(props.tagName)}`}>{props.tagName}</Link></p>
    )
}

export default TagPill