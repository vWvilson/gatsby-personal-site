import React from 'react'
import Layout from '../components/layout'
import contactStyle from './index.module.scss'
import Head from '../components/head'





const Contactpage =()=> {
    return (        
        <Layout>
            <Head title = "Contact" />
            <h1>Contact me</h1>
            <p> Send me an  <a className={contactStyle.contactItem} 
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=c.vwvilson@gmail.com" 
            target="_blank">email</a></p>
            <p>Check out my <a className={contactStyle.contactItem} href ="https://github.com/vWvilson" target ="_blank">github</a></p>
        </Layout>

    )
}

export default Contactpage;