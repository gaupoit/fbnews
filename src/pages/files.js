import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Files({ data }) {
  console.log('Data', data)
  return (
    <Layout>
      <h1>Project's Files</h1>
      <table>
          <thead>
              <tr>
                  <th>relativePath</th>
                  <th>prettySize</th>
                  <th>extension</th>
                  <th>birthTime</th>
              </tr>
          </thead>
          <tbody>
              {data.allFile.edges.map(({node}, index) => (
                  <tr key={index}>
                      <td>{node.relativePath}</td>
                      <td>{node.prettySize}</td>
                      <td>{node.extension}</td>
                      <td>{node.birthTime}</td>
                  </tr>
              ))}
          </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
