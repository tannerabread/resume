import Layout from '../../components/Layout'
import Title from '../../components/Title'

const Blog = (pageProps) => {
  return (
    <Layout>
      <Title 
        heading="Blog"
        subheading="Click here for code for this page"
        href="https://github.com/tannerabread/resume/blob/main/src/pages/blog/index.js"
      />
      <h1>Blog stuff here</h1>
    </Layout>
  )
}

export default Blog