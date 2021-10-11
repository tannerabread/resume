import db from '../../../../db'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const params = {
      TableName: process.env.TABLE_NAME,
      Key: {
        postId: req.query.id
      }
    }

    db.get(params, function(err, data) {
      if (err) {
        console.log('error:', err)
      } else {
        res.json(data.Item)
      }
    })
  } else {
    res.status(400).send({ message: "only GET requests allowed" })
  }
}