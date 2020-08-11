import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const VuikoEmo = () => (
  <lottie-player
    src="https://assets7.lottiefiles.com/packages/lf20_18ApyG.json"
    background="transparent"
    speed="1"
    style={{ width: 300, height: 300 }}
    loop
    controls
    autoplay
  ></lottie-player>
)

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div style={{ margin: "3rem auto", maxWidth: 800, padding: "0 1rem" }}>
      <header style={{ marginBottom: "1.5rem" }}>
        <Link to="/" style={{ textShadow: "none", backgroundImage: "none" }}>
          <h3 style={{ display: "inline" }}>
            {data.site.siteMetadata.title} <VuikoEmo />
          </h3>
        </Link>
        <ul style={{ listStyle: "none", float: "right" }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
