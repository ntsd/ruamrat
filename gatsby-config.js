module.exports = {
  siteMetadata: {
    title: `รวมรัตน์ กระจก อลูมิเนียม`,
    description: `รวมรัตน์ กระจก อลูมิเนียม | จำหน่าย ผลิต ติดตั้ง กระจก อลูมิเนียม พร้อมอุปกรณ์`,
    author: `@hotcode`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`
  ],
}
