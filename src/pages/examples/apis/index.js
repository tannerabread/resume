import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import Examples from '../../../components/Examples'

const Apis = (props) => {
  return (
    <Layout>
      <Title
        heading="External API Examples"
        subheading="Click here for code for this page"
        href="https://github.com/tannerabread/resume/blob/main/src/pages/examples/apis/index.js"
      />

      <Examples filter="External API" />
    </Layout>
  )
}

export default Apis