import Image from 'next/image'
import Title from '../../components/Title'

const Post = ({ post }) => {
  console.log("post", post)
  if (!post) return <div>loading...</div>

  return (
    <>
      <Title heading={post.postId} />
      <h5>{post.date}</h5>
      {post.sections.map((section, i) => {
        return (
          <div key={i}>
            {section.displayType === 'code' 
              ? <code>{section.content}</code>
              : section.displayType === 'img'
                ? <Image 
                    src={section.content} 
                    alt={section.alt} 
                    width={500}
                    height={500}
                  />
                : <p>{section.content}</p>
            }
          </div>
        )
      })}
    </>
  )
}

export default Post

const url = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.SERVER

export async function getStaticPaths() {
  const res = await fetch(`${url}/api/posts`)
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { id: post.postId }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${url}/api/posts/${params.id}`)
  const post = await res.json()

  return { props: { post } }
}