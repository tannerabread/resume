import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Grid from '../../components/Grid'

const Posts = ({ posts }) => {
  posts.map((post, i) => (
    post.url = `posts/${post.postId}`,
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

const url = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.SERVER

export async function getStaticProps() {
  const res = await fetch(`${url}/api/posts`)
  const posts = await res.json()

  return {
    props: {
      posts,
    }
  }
}