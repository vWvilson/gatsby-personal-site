import React from 'react'
import Layout from '../components/layout'
import {Link,graphql,useStaticQuery} from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'




const BlogPage = ()=> {
    const blogData = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              } 
              fields {
                slug
              }
              
            }
          }
        }
      }
`)
    return(
        <Layout>
          <Head title ="Blog" />
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
            {blogData.allMarkdownRemark.edges.map((edge) => {
                return (
                    <li className ={blogStyles.post}>
                      <Link to ={`/blog/${edge.node.fields.slug}`}>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.date}</p>
                      </Link>
                    </li>
                    
                )
            })}</ol>
        </Layout>
            
            
            )
        }

export default BlogPage




