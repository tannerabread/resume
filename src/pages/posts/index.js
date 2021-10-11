import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Grid from '../../components/Grid'
import server from '../../config'

const Posts = ({ posts }) => {
  posts.map((post, i) => (
    post.url = `/posts/${post.postId}`,
    post.heading = post.postId
  ))

  return (
    <Layout>
      <Title
        heading="All Blog Posts"
        subheading="Click here for code for this page"
        href="https://github.com/tannerabread/resume/blob/main/src/pages/posts/index.js"
      />
      <Grid gridItems={posts} />
    </Layout>
  )
}

export default Posts


export async function getStaticProps() {
  const res = await fetch(`${server}/api/posts`)
  const posts = await res.json()

  return {
    props: {
      posts,
    }
  }
}