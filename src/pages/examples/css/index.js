import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import Examples from '../../../components/Examples'

const Css = (props) => {
  return (
    <Layout>
      <Title
        heading="CSS Examples"
        subheading="Click here for code for this page"
        href="https://github.com/tannerabread/resume/blob/main/src/pages/examples/css/index.js"
      />

      <Examples filter="CSS" />
    </Layout>
  )
}

export default Css