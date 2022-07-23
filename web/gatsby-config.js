require('dotenv').config('./.env');

module.exports = {
  siteMetadata: {
    title: `Many Faces Initiative`,
    siteUrl: `https://techhub-blog.netlify.com`,
    description: `The Many Faces Initiative is launching a paid ten-week brewery internship program designed to provide mentorship and offer an immersive training experience to people of color interested in pursuing careers within the craft brewing industry.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
  ],
};
