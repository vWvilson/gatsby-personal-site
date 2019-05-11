module.exports = {
    siteMetadata: {
        title: 'Personal site',
        author:'Wil Wilson'
    },
    plugins:[
        'gatsby-plugin-react-helmet',
        {
            resolve:'gatsby-source-contentful',
            options: {
                spaceId:process.env.CONTENTFUL_SPACE_ID,
                accesToken:process.env.CONTENTFUL_ACCESS_TOKEN
        }
    },
        'gatsby-plugin-sass',
         {
            resolve: 'gatsby-source-filesystem',
            options: {
                name:'src',
                path:`${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve:'gatsby-transformer-remark',
            options : {
                plugins : [
                    'gatsby-remark-relative-images',
                    {
                        resolve:'gatsby-remark-images',
                        options: {
                            maxWidth :850,
                            maxHeight:500,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }

        }
    ]
}