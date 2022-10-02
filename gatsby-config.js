module.exports = {
  pathPrefix: "/portfolio-demo",
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      }, 
      __key: "images"
    }, {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Rubik`, 
            file: `https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap`,
          },
          {
            name: `Pacifico`, 
            file: `https://fonts.googleapis.com/css2?family=Pacifico&display=swap`,
          },
          {
            name: `Caveat`, 
            file: `https://fonts.googleapis.com/css2?family=Caveat&display=swap`,
          },
        ],
      },
  },
]
};