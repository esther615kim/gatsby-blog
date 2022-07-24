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