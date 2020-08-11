import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <Header headerText="Social Feeds" />
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                - {node.frontmatter.date}
              </span>
            </h3>
          </Link>
          <img
            src={`https://source.unsplash.com/random/400x200?nature,life,water,${node.id}`}
            alt=""
          />
          <p>
            {node.excerpt} - {node.frontmatter.author}
          </p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
