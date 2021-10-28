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
        <title>Bannon Tanner Resume</title>
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

        <p className={styles.code}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>

      </Layout>
    </>
  )
}
