import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default function Home() {
  return (
    <div style={{ color: "#ff6300"}}>
      <Link to="/about/">About</Link>
      <Header headerText="Socail News" />
      <p>Most quality news</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
