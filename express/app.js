const express = require('express')
const { Sequelize } = require('sequelize')
require('dotenv').config()
const app = express()


app.get('/', (req, res) => {
  res.send('111')
})

app.listen(process.env.PORT, () => {
  console.log(`started on port: ${process.env.PORT}`)
})

console.log(process.env)

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: 'postgres',
  dialect: 'postgres',
  ssl: false,
  port: 5432,
})

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

connectDB()