import db from '../../../../db'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // get for main posts page
    // so get all posts (can use scan or no key in query)
    const params = {
      TableName: process.env.TABLE_NAME
    }

    db.scan(params, function(err, data) {
      if (err) {
        console.error('unable to scan table. Error JSON:', JSON.stringify(err, null, 2))
      } else {
        console.log('scan succeeded')
        data.Items.forEach(function(post) {
          console.log("api post",post)
        })
        res.status(200).json(data.Items)
      }
    })
  } else {
    res.status(400).send({ message: "Only GET requests allowed" })
    return
  }
}