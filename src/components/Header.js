import * as React from 'react'
import { Link } from 'gatsby'

import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaCoffee } from '@react-icons/all-files/fa/FaCoffee'

import { headerTitle, headerContainer, headerDivider, iconButton } from '../styles/header.module.css'

const Header = () => {
    return (
        <div className={ headerContainer }>
            <p className={ headerTitle }>Louie Weng</p>
            <span>
                <Link to="https://github.com/lou-weng" className={iconButton}>
                    <FaGithub></FaGithub>
                </Link>
                <Link to="https://www.linkedin.com/in/louie-weng/" className={iconButton}>
                    <FaLinkedin></FaLinkedin>
                </Link>
                <Link to="https://calendly.com/louieweng" className={iconButton}>
                    <FaCoffee></FaCoffee>
                </Link>
            </span>
            <p>Welcome to my space on the web. The place where I record all my recent dabblings.</p>
            <hr className={ headerDivider }></hr>
        </div>
    )
}

export default Header