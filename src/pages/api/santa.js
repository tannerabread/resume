import list from '../../data/list.json'

export default function handler(req, res) {
  console.log('list', list)
  // res.status(200).json({ name: 'John Doe' })
  if (req.method === 'GET') {
    res.status(200).json(list)
  }

  if (req.method === 'PUT') {
    // process PUT request
    const body = JSON.parse(req.body)
    
    res.status(200).json(body)
  }
}