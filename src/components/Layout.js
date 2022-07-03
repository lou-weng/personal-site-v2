import * as React from 'react'

import { layoutContainer, mainContainer } from "../styles/layout.module.css"
import SideBar from "./SideBar";

const Layout = ({ children }) => {
    return (
        <div className={mainContainer}>
            <div className={layoutContainer}>
                { children }
            </div>
        </div>
    )
}

export default Layout

