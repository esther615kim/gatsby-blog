import type { GatsbyNode } from "gatsby";


// to create a page - use createPages API
export const createPages: GatsbyNode["createPages"] = (args) =>{
    // using args => G passes it into lifecycle funs, check what's available to use after args.
    // STEP 1 load data using graphQL from csv file
    // STEP 2 create a page
    args.graphql(`
    query {
        allAllCitiesCsv {
          edges {
            node {
              category
              title
              text
            }
          }
        }
      }
    `).then(result =>{
        console.log("result", result)
    })
}

// absolute path
// const path = require("path");

// exports.onCreateWebpackConfig = ({ actions }) => {
//     actions.setWebpackConfig({
//         resolve: {
//             modules: [path.resolve(__dirname, "src"), "node_modules"],
//         },
//     });
// };

// exports.createPages = async ({ actions, graphql }) => {
//     const { createPage } = actions;
//     const {
//         data: { contentfulBlog, allContentfulBlogPost },
//     } = await graphql(`
//         {
//             contentfulBlog {
//                 postsPerPage
//                 slug
//             }
//             allContentfulBlogPost(
//                 sort: { fields: publishedDate, order: DESC }
//             ) {
//                 edges {
//                     node {
//                         slug
//                         publishedDate(formatString: "DD MMM YYYY")
//                         pageContent {
//                             raw
//                         }
//                         description
//                         title
//                         contentful_id
//                     }
//                 }
//             }
//         }
//     `);

//     allContentfulBlogPost.edges.forEach((blogPost) => {
//         createPage({
//             path: `${contentfulBlog.slug}/${blogPost.node.slug}`,
//             context: {
//                 postId: blogPost.node.contentful_id,
//             },
//             component: path.resolve("./src/templates/BlogPost/index.js"),
//         });
//     });

//     const numPages = Math.ceil(
//         allContentfulBlogPost.edges.length / contentfulBlog.postsPerPage
//     );

//     for (let i = 0; i < numPages; i++) {
//         createPage({
//             path: `${contentfulBlog.slug}${i === 0 ? "" : `/${i + 1}`}`,
//             component: path.resolve(
//                 "./src/templates/PaginatedBlogPage/index.js"
//             ),
//             context: {
//                 blogSlug: contentfulBlog.slug,
//                 totalPages: numPages,
//                 currentPage: i + 1,
//                 posts: allContentfulBlogPost.edges
//                     .map((blogPost) => blogPost.node)
//                     .slice(
//                         i * contentfulBlog.postsPerPage,
//                         i * contentfulBlog.postsPerPage +
//                             contentfulBlog.postsPerPage
//                     ),
//             },
//         });
//     }
// };


