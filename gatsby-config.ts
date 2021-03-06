import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env`,
});
import path from "path";


const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken":process.env.CONTENTFUL_ACCESS_TOKEN,//"8Git6JcO73p40t9fwk-5_7GDdHI-ykm-Gr8qvzlKAAo",
      "spaceId": process.env.CONTENTFUL_SPACE_ID, //"0yn2qh1q6m2r"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp","gatsby-transformer-csv", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "data",
      "path": "./src/data/"
    },
    __key: "data"
  },'gatsby-plugin-postcss',"gatsby-plugin-root-import",{
    resolve: 'gatsby-plugin-root-import',
    options: {
      root: path.join(__dirname, "src")
  }}]
};

export default config;
