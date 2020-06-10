module.exports = {
  siteMetadata: {
    brand: 'รวมรัตน์',
    title: 'กระจก อลูมิเนียม มุ้งลวด เหล็กดัด ลาดกระบัง หนองจอก',
    description:
      'จำหน่าย ติดตั้ง กระจก อลูมิเนียม พร้อมอุปกรณ์ ลาดกระบัง ฉลองกรุง ร่มเกล้า หนองจอก',
    author: '@hotcode',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'รวมรัตน์ กระจกอลูมิเนียม',
        short_name: 'รวมรัตน์',
        start_url: '/',
        background_color: '#ff2f00',
        theme_color: '#ff2f00',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-webpack-size',
  ],
};
