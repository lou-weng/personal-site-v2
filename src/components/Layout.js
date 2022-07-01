import * as React from 'react'

import { layoutContainer } from "../styles/layout.module.css"

const Layout = ({ children }) => {
    return (
        <>
            <div className={layoutContainer}>
                { children }
            </div>
        </>
    )
}

export default Layout