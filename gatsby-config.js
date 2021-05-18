module.exports = {
  siteMetadata: {
    title: "Joffrey Bienvenu",
    siteUrl: 'https://joffreybvn.be',
    description: 'Joffrey Bienvenu'
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NKNXDX5",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Joffrey Bienvenu",
        short_name: "Joffrey Bienvenu",
        start_url: "/",
        background_color: "#181a1b",
        theme_color: "#e8e6e3",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about-me/*`, `/projects/*`],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-plugin-cname'
  ],
};
