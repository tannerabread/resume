import useSWR from 'swr'
import Layout from '../../components/Layout'
import Title from '../../components/Title'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Blog = ({ id }) => {
  const { data, error } = useSWR(`/blog/${id}`, fetcher)

  if (error) return "An error has occured"
  if (!data) return "Loading..."
  return <code>{JSON.stringify(data, null, 2)}</code>
}

export default Blog