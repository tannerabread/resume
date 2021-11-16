// import { useRouter } from 'next/router'
// import ErrorPage from 'next/error'
// import Head from 'next/head'
// import Container from '../../components/Container'
// import Title from '../../components/Title'
// import PostHeader from '../../components/posts/PostHeader'
// import PostBody from '../../components/posts/PostBody'
// import { getPostBySlug, getAllPosts } from '../../lib/api'
// import markdownToHtml from '../../lib/markdownToHtml'

export default function Post() {
  return(
    <>
    </>
  )
}

// const Post = ({ post }) => {
//   const router = useRouter()
//   if (!router.isFallback && !post?.slug) {
//     return <ErrorPage statusCode={404} />
//   }

//   return (
//     <Container>
//       {router.isFallback ? (
//         <Title>Loading...</Title>
//       ) : (
//         <>
//           <article>
//             <Head>
//               <title>
//                 {post.title}
//               </title>
//             </Head>
//             <PostHeader
//               title={post.title}
//               date={post.date}
//               author={post.author}
//             />
//             <PostBody content={post.content} />
//           </article>
//         </>
//       )}
//     </Container>
//   )
// }

// export default Post

// export async function getStaticPaths() {
//   const posts = getAllPosts(['slug'])

//   return {
//     paths: posts.map((post) => {
//       return {
//         params: {
//           slug: post.slug
//         }
//       }
//     }),
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }) {
//   const post = getPostBySlug(params.slug, [
//     'title',
//     'date',
//     'slug',
//     'author',
//     'content',
//     'ogImage',
//     'coverImage',
//   ])
//   const content = await markdownToHtml(post.content || '')
  
//   return {
//     props: {
//       post: {
//         ...post,
//         content,
//       }
//     }
//   }
// }