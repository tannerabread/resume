import Layout from '../../components/Layout'
import Title from '../../components/Title'

const About = (pageProps) => {
  return (
    <Layout>
      <Title
        heading="About Me"
        subheading="Click here for code for this page"
        href="https://github.com/tannerabread/resume/blob/main/src/pages/about/index.js"
      />
      <p>About me stuff will go here</p>
    </Layout>
  )
}

export default About