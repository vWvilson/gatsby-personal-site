import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import contactStyle from './index.module.scss'
import Head from '../components/head'






const AboutPage = ()=> {
    return(
        <Layout>
        <Head title ="About"/>
        <h1>About</h1>
        <p>Former structural welder.Building buildings, building websites.</p>
        <Link className={contactStyle.contactItem} to ="/contact"><p>Contact</p></Link>
        </Layout>
    )
}

export default AboutPage