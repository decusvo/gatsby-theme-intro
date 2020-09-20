module.exports = {
  siteMetadata: {
    description: "Personal résumé.",
    locale: "en",
    title: "Tomas Riabovas",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "blue",
      },
    },
  ],
}
