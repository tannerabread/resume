import Head from 'next/head'
// import Image from 'next/image'
import styles from '../Home.module.css'

import React from 'react'
import Contacts from '../components/Contacts'
import contacts from '../data/contacts.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bannon Tanner Resume</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bannon Tanner
        </h1>

        <Contacts contacts={contacts} />

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>About Me &rarr;</h2>
            <p>Find in-depth information about myself and my interests.</p>
          </a>

          <a href="/projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Take a peak at some of my old/new side projects available on the web!</p>
          </a>

          <a href="/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Examples of more basic concepts dealing with web dev.</p>
          </a>

          <a href="/blog" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Check out my blog!</p>
          </a>
        </div>

        <div className="resume">
          <p>resume stuff will go here</p>
        </div>
      </main>
    </div>
  )
}
