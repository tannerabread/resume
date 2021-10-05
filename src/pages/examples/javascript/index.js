import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import Examples from '../../../components/Examples'

const JavaScript = (props) => {
  return (
    <Layout>
      <Title
        heading="JavaScript Examples"
        subheading="Click here for code for this page"
        href="https://github.com/tannerabread/resume/blob/main/src/pages/examples/javascript/index.js"
      />

      <Examples filter="JavaScript" />
    </Layout>
  )
}

export default JavaScript