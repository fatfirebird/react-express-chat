const express = require('express')
const { Client } = require('pg')
require('dotenv').config()
const app = express()


app.get('/', (req, res) => {
  res.send('111')
})

app.listen(process.env.PORT, () => {
  console.log(`started on port: ${process.env.PORT}`)
})

console.log(process.env)
const client = new Client({
  user: process.env.POSTGRES_USER,
  host: 'postgres',
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
  ssl: false
})

const connection = () => {
  client.connect((error) => {
    try {
      console.error('db connected')
    } catch {
      console.error('not connected')
      console.error(error)
      connection()
    }
  })
}

connection()