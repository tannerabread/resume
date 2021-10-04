import Head from 'next/head'
import styles from '../Home.module.css'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Contacts from '../components/Contacts'
import contacts from '../data/contacts.json'
import Grid from '../components/Grid'
import HomeGrid from '../components/HomeGrid'
import homegrid from '../data/homegrid.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bannon Tanner Resume</title>
      </Head>

      <Layout>
        <Title 
          heading="Bannon Tanner" 
          subheading="Click here for code for this page" 
          href="https://github.com/tannerabread/resume/blob/main/src/pages/index.js"
        />

        <Contacts contacts={contacts} />

        <Grid>
          <HomeGrid gridItems={homegrid} />
        </Grid>

        <div className="resume">
          <p>resume stuff will go here</p>
        </div>
      </Layout>
    </>
  )
}
