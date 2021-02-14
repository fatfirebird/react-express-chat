const express = require('express')
const { Sequelize } = require('sequelize')
require('dotenv').config()

const userRoute = require('./User') 


class Server {
  constructor() {
    this.app = express()
    this.sequalize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
      host: 'postgres',
      dialect: 'postgres',
      ssl: false,
      port: 5432,
    })

    this._start()
    this._connectDB(this.sequalize)
    this._routes()
  }

   _routes() {
    this.app.get('/', (req, res) => {
      res.send('123')
    })

    this.app.use('/api/user', userRoute)
  }

  _start() {
    this.app.listen(process.env.PORT, () => {
      console.log(`started on port: ${process.env.PORT}`)
    })
  }

  _connectDB(db) {
    db.authenticate()
      .then(() => console.log('Connection has been established successfully.'))
      .catch(error => console.error('Unable to connect to the database:', error))
  }
}

module.exports = new Server()