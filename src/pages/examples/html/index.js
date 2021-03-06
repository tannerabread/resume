import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import Examples from '../../../components/Examples'

const Html = (props) => {
  return (
    <Layout>
      <Title
        heading="HTML Examples"
        subheading="Click here for code for this page"
        href="https://github.com/tannerabread/resume/blob/main/src/pages/examples/html/index.js"
      />

      <Examples filter="HTML" />
    </Layout>
  )
}

export default Html