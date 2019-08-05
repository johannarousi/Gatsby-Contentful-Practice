import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>My Contacts</h1>
        <p>Email: johanna.rousi@gmail.com</p> <p>Phone: 9875867346538</p>
        <p>
          Find more about me in my{" "}
          <a
            href="https://www.instagram.com/johannarousi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram account
          </a>
        </p>
      </Layout>
    </div>
  )
}
export default ContactPage
