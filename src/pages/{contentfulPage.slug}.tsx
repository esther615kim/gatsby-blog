import { graphql } from 'gatsby';
import React from 'react'
// import Layout from "components/Layout"
import Layout from "../components/Layout";

const ContentfulPage = (props:string) => {
    console.log("props",props)
    return (
        <Layout>
            <h3>Hello JAM STACK world!</h3>
        </Layout>
    )
}

export default ContentfulPage;

export const query = graphql`
query PageQuery ($id: String){
    contentfulPage(id: {eq: $id }){
      id
      title
    }
  }
`