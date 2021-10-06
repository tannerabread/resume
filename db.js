import AWS from 'aws-sdk'

// Update AWS config
AWS.config.update({
  // AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are reserved variable names on Vercel
  accesKeyId: process.env.DB_ACCESS_KEY_ID, //never hard code secret credentials
  secretAccessKey: process.env.DB_SECRET_ACCESS_KEY, //never hard code secret credentials
  region: us-east-2,
})

// create DynamoDB service object
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "latest" })

export default db