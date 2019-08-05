import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About me" />
        <h1>Bio</h1>
        <p>
          I'm a junior developer from Helsinki. I started to learn coding in
          January 2019.
        </p>
        <p>
          Feel free to <Link to="contact">contact me</Link>
        </p>
      </Layout>
    </div>
  )
}
export default AboutPage
