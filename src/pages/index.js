import Head from 'next/head'
import styles from '../Home.module.scss'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Contacts from '../components/Contacts'
import contacts from '../data/contacts.json'
import Grid from '../components/Grid'
import homegrid from '../data/homegrid.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>TanneraBread Digital Garden</title>
      </Head>

      <Layout>
        <Title 
          heading="TanneraBread" 
          subheading="Click here for code for this page" 
          href="https://github.com/tannerabread/resume/blob/main/src/pages/index.js"
          style={{
            fontFamily: "'Molle', cursive",
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "calc(4px + 10vmin)",
            textShadow: "3px 3px 10px #606060",
            WebkitTextFillColor: "white",
            WebkitTextStrokeWidth: "0.1rem",
            WebkitTextStrokeColor: "#EFB764"
          }}
        />

        <Contacts contacts={contacts} />

        <Grid gridItems={homegrid} />

      </Layout>
    </>
  )
}
