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
      <h1>Bannon Tanner</h1>
      <h2>Interests:</h2>
      <ul>
        <li>CodinGame</li>
        <li>Drawing Cat NFTs</li>
        <li>Learning New Technologies</li>
        <li>DnD</li>
      </ul>
    </Layout>
  )
}

export default About