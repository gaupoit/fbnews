import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Container from "../components/container"
import User from "../components/user"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <Container>
        <Header headerText={`About ${data.site.siteMetadata.title}`} />
        <p>Founders</p>
        <User
          username="CaoBao Do"
          avarta="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          excerpt="I'm CaoBao. Lorem ipsum dolor sit amet, consectetur adipisicing"
        />
        <User
          username="Anh Son Tran Duc"
          avarta="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
          excerpt="I'm Son Tran. Lorem ipsum dolor sit amet, consectetur adipisicing"
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
