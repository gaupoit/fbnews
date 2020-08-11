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
          username="Quynh Do"
          avarta="https://i.pravatar.cc/300?name=quynh-do"
          excerpt="I'm Quynh Do. Lorem ipsum dolor sit amet, consectetur adipisicing"
        />
        <User
          username="Kien Tran"
          avarta="https://i.pravatar.cc/300?name=kien-tran"
          excerpt="I'm Kien Tran. Lorem ipsum dolor sit amet, consectetur adipisicing"
        />
        <User
          username="Badu"
          avarta="https://i.pravatar.cc/300?name=badu"
          excerpt="I'm Badu. Lorem ipsum dolor sit amet, consectetur adipisicing"
        />
        <User
          username="Duy Hung"
          avarta="https://i.pravatar.cc/300?name=duy-hung"
          excerpt="I'm Duy Hung. Lorem ipsum dolor sit amet, consectetur adipisicing"
        />
        <User
          username="Nguyen LTD"
          avarta="https://i.pravatar.cc/300?name=nguyen-ltd"
          excerpt="I'm Nguyen. Lorem ipsum dolor sit amet, consectetur adipisicing"
        />
        <User
          username="Hoang Say"
          avarta="https://i.pravatar.cc/300?name=hoang-say"
          excerpt="I'm Say. Lorem ipsum dolor sit amet, consectetur adipisicing"
        />
        <User
          username="Thinh Ng"
          avarta="https://i.pravatar.cc/300?name=thinhnp"
          excerpt="I'm Thinh Nguyen. Lorem ipsum dolor sit amet, consectetur adipisicing"
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
