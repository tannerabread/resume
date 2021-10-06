import db from '../../../../db'

export default async function Posts (req, res) {
  const id = req.query.id

  // filter API request by method
  if (req.method === 'GET') {
    const params = {
      TableName: 'posts',
      Key: {
        postId: id
      }
    }

    db.get(params, function (err, data) {
      if (err) { 
        console.log('Error', err) 
      } else {
        // send the json response from the callback
        res.json(data.Item)
      }
    })
  } else if (req.method === 'PUT') {
    // allow a blog post to update its likes (via a button) or views (on rendering)
  }
}