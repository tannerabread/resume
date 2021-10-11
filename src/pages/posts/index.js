import Layout from '../../components/Layout'
import Title from '../../components/Title'
// import Grid from '../../components/Grid'
// import db from '../../../db'
// import useSWR from 'swr'

const Posts = ({ posts }) => {
//   console.log("posts", posts)
//   if (!posts) return <div>loading...</div>

//   posts.map((post, i) => (
//     post.url = `/posts/${post.postId}`,
//     post.heading = post.postId
//   ))

  return (
    <Layout>
       <Title
         heading="All Blog Posts"
         subheading="Click here for code for this page"
         href="https://github.com/tannerabread/resume/blob/main/src/pages/posts/index.js"
       />
       {/* <Grid gridItems={posts} />
       <div>Posts</div> */}
    </Layout>
  )
}

export default Posts

// export async function getStaticProps() {
//   const params = {
//     TableName: process.env.TABLE_NAME
//   }
//   const res = db.scan(params, function(err, data) {
//     if (err) {
//       console.error('unable to scan table. Error JSON:', JSON.stringify(err, null, 2))
//     } else {
//       console.log('scan succeeded')
//       data.Items.forEach(function(post) {
//         console.log("api post",post)
//       })
//       // res.status(200).json(data.Items)
//       console.log("data.items", data.Items)
//       return JSON.stringify(data.Items)
//     }
//   })
//   console.log("res", res)

//   return {
//     props: {
//       posts: res,
//     }
//   }
// }

// const fetcher = (url) => fetch(url).then((res) => res.json())

// export async function getServerSideProps(context) {
//   // console.log("context", context)
//   // console.log("serverside req", context.req.headers.host)
//   // const url = process.env.NODE_ENV !== 'production' 
//   //   ? `http://${context.req.headers.host}`
//   //   : `https://${context.req.headers.host}`
//   // const res = await fetch(`/api/posts`)
//   // const posts = await res.json()
//   const { data, error } = useSWR('/api/posts', fetcher)  

//   if (error) return { props: { posts: error } }
//   if (!data) return { props: { posts: "loading..." } }
//   return {
//     props: {
//       posts: data,
//     }
//   }
// }