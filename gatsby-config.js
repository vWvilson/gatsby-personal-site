module.exports = {
    siteMetadata: {
        title: 'Wil Wilson',
        author:'Wil Wilson'
    },
    plugins:[

        'gatsby-plugin-react-helmet',
        
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