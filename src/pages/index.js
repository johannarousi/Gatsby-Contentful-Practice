import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I'm Johanna, a Junior Developer, living in beatiful Turku.</h2>
      <p>
        Need a developer? <a href="/contact">Contact me!</a>
      </p>
    </Layout>
  )
}

export default IndexPage
