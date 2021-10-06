import * as uuid from 'uuid'
import db from '../../../db'

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const post = {
      id: uuid.v4(),
      content: req.body.content,
      createdAt: Date.now()
    }

    await db.put({
      Post: post
    })

    res.status(201).json(post)
  }

  if (req.method === 'GET') {
    const { Post } = await db.get({
      Key: {
        id: req.query.id
      }
    })

    res.status(200).json(Post)
  }
}