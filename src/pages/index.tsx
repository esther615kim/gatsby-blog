import * as React from "react"
import { graphql } from "gatsby"

type Props = {
  data: Queries.Query
}

// markup
const IndexPage = (props:Props) => {
  return (
    <main>
      <h3 className="text-red-400">Places to visit in London 🍦 </h3>
      <ul>
        {/* {props.data.allAllCitiesCsv?.edges.map(item => <li key={item.node.title}>{item.node.title}</li>)} */}
      </ul>
    </main>
  )
}

export default IndexPage

// export const pageQuery = graphql`
// query {
//   allAllCitiesCsv {
//     edges {
//       node {
//         category
//         title
//         text
//       }
//     }
//   }
// }
// `


// import React from "react";
// import { Layout, SEO } from "components";

// const Index = () => {
//     return (
//         <Layout>
//             <SEO title="Home" description="test" />
//             <h1>Gatsby &amp; Contentful</h1>
//         </Layout>
//     );
// };

// export default Index;