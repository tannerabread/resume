import useSWR from "swr"

const fetcher = async (...args) => {
  const res = await fetch(...args)
  return res.json()
}

const FetchFromDB = ({ id }) => {
  const { data, error } = useSWR(`/blog/${id}`, fetcher)

  if (error) return "Failed to load from DB"
  if (!data) return "Loading..."
  if (data) {
    return (
      <>
        <code>{JSON.stringify(data, null, 2)}</code>
      </>
    )
  }
}

export default FetchFromDB