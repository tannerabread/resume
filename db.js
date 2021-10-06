import AWS from 'aws-sdk'

// Update AWS config
const client = new AWS.DynamoDB.DocumentClient({
  // AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are reserved variable names on Vercel
  accesKeyId: process.env.DB_ACCESS_KEY_ID, //never hard code secret credentials
  secretAccessKey: process.env.DB_SECRET_ACCESS_KEY, //never hard code secret credentials
  region: process.env.REGION,
  params: {
    TableName: process.env.TABLE_NAME,
  }
})

export default {
  get: (params) => client.get(params).promise(),
  put: (params) => client.put(params).promise(),
  query: (params) => client.query(params).promise(),
  udpate: (params) => client.update(params).promise(),
  delete: (params) => client.delete(params).promise(),
}

// // create DynamoDB service object
// const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "latest" })

// export default db