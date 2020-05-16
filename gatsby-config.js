module.exports = {
  siteMetadata: {
    title: `รวมรัตน์ กระจกอลูมิเนียม`,
    description: `รวมรัตน์ กระจกอลูมิเนียม | จำหน่าย ผลิต ติดตั้ง กระจก อลูมิเนียม พร้อมอุปกรณ์`,
    author: `@hotcode`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `รวมรัตน์ กระจกอลูมิเนียม`,
        short_name: `รวมรัตน์`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    'gatsby-plugin-sass',
    `gatsby-plugin-webpack-size`,
  ],
}
