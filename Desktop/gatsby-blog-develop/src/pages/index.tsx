import * as React from "react"
import { graphql } from "gatsby"

type Props = {
  data: Queries.Query
}


// markup
const IndexPage = (props:Props) => {
  return (
    <main>
      <h3>Places to visit in London 🍦 </h3>
      <ul>
        {props.data.allAllCitiesCsv?.edges.map(item => <li key={item.node.title}>{item.node.title}</li>)}
      </ul>
    </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
query {
  allAllCitiesCsv {
    edges {
      node {
        subtitle
        title
        text
      }
    }
  }
}

`