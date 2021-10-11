import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Grid from '../../components/Grid'
import server from '../../config'
import useSWR from 'swr'

// const fetcher = (...args) => fetch(...args).then(res => res.json())

const Posts = ({ posts }) => {
  // const { data, error } = useSWR(`${server}/api/posts`, fetcher)

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  // return (
  //   <div>
  //     {JSON.stringify(data)}
  //   </div>
  // )
  // console.log("posts", posts)
  // if (!posts) return <div>loading...</div>

  // posts.map((post, i) => (
  //   post.url = `/posts/${post.postId}`,
  //   post.heading = post.postId
  // ))

  return (
    <Layout>
      <Title
        heading="All Blog Posts"
        subheading="Click here for code for this page"
        href="https://github.com/tannerabread/resume/blob/main/src/pages/posts/index.js"
      />
      {/* <Grid gridItems={posts} /> */}
      <div>Posts</div>
    </Layout>
  )
}

export default Posts


// export async function getStaticProps() {
//   const res = await fetch(`${server}/api/posts`)
//   console.log("res", res)
//   const posts = await res.json()

//   console.log("getStaticProps", posts)
//   if (!posts) {
//     return { props: { posts: "posts" } }
//   }
//   return {
//     props: {
//       posts,
//     }
//   }
// }