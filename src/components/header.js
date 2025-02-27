import React from 'react'
import {Link, graphql,useStaticQuery} from 'gatsby'

import headerStyle from './header.module.scss'

const Header =()=> {
const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
`)

    return(
        <header className ={headerStyle.header}>
            <h1 >
                <Link className={headerStyle.title} to = "/">
                {data.site.siteMetadata.author}
                </Link>
            </h1>
            <nav>
                 <ul className={headerStyle.navList}>
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to = "/">Home</Link></li>
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to ="/about">About</Link></li>
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to ="/blog">Blog</Link></li>
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to ="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header





