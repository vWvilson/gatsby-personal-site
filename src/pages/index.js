import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout';
import contactStyle from './index.module.scss'
import Head from '../components/head'




const IndexPage=()=> {
    return(
        <Layout>
            <Head title ="Home"/>
            <h1>Hello.</h1>
            <h2>I'm Wil, a front-end developer living in Pittsburgh. </h2>
            <p>Need a developer? <Link className={contactStyle.contactItem}  to ="/contact">Contact me </Link></p>
        </Layout>
    )
    
}

export default IndexPage

