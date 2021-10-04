import Head from 'next/head'
import styles from '../Home.module.css'

import Container from '../components/Container'

import Contacts from '../components/Contacts'
import contacts from '../data/contacts.json'

import Grid from '../components/Grid'
import HomeGrid from '../components/HomeGrid'
import homegrid from '../data/homegrid.json'

// import Experience from '../components/Experience'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Bannon Tanner Resume</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bannon Tanner
        </h1>

        <Contacts contacts={contacts} />

        <Grid>
          <HomeGrid gridItems={homegrid} />
        </Grid>

        <div className="resume">
          <p>resume stuff will go here</p>
        </div>
      </main>
    </Container>
  )
}
