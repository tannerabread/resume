import Container from '../../components/Container'
import Title from '../../components/Title'
import Link from 'next/link'
import Card from '../../components/Card'

const Posts = ({ posts }) => {
  console.log(posts)
  return (
    <Container>
      <Title
        heading="All Blog Posts"
        subheading="Click here for code for this page"
        href="https://github.com/tannerabread/resume/blob/main/src/pages/posts/index.js"
      />
      {posts.map((post, i) => (
        <Link href={`${url}/posts/${post.postId}`} key={i} passhref>
          {/* need to use grid here
              might need to rewrite grid to make this work
              Card needs to be nested in grid but am getting error
           */}
          <Card heading={post.postId} 
            target="_blank"
          />
        </Link>
      ))}
    </Container>
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