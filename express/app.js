const express = require('express')
const cors = require('cors')
const http = require('http')
const io = require('socket.io')
const { Sequelize } = require('sequelize')

require('dotenv').config()

const API = require('./api') 

class Server {
  constructor() {
    this.app = express()
    this.cors = {
      origin: 'http://localhost:3000',
      credentials: true,
    }


    this.sequalize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
      host: 'postgres',
      dialect: 'postgres',
      ssl: false,
      port: 5432,
    })
    
    
    this._start()
    this._connectDB(this.sequalize)
    this._routes(this.sequalize)
  }
  
  _routes(sequalize) {    
    API(this.app, sequalize)
  }

  _start() {
    this.app.use(cors(this.cors))

    this.server = http.Server(this.app)
    this.io = io(this.server, {
      cors: this.cors,
      path: '/api/chat',
      transports: ['websocket'],
    })

    this.io.on('connect', (socket) => {
      console.log(socket)
      console.log('socket')
    })

    this.server.listen(process.env.PORT, () => {
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