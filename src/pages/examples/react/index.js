import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import Examples from '../../../components/Examples'

const ReactExamples = (props) => {
  return (
    <Layout>
      <Title 
        heading="React Examples"
        subheading="Click here for code for this page"
        href="https://github.com/tannerabread/resume/blob/main/src/pages/examples/react/index.js"
      />

      <Examples filter="React" />
    </Layout>
  )
}

export default ReactExamples