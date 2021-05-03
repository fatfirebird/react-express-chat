const bodyParser = require('body-parser')


const userRoutes = require('./User')
const authRoutes = require('./Auth')
const messageRoutes = require('./Message')


module.exports = (app, sequalize) => {
  // api v1
  const version = '/api'
  
  app.use(bodyParser.json())

  userRoutes(app, sequalize, version)
  authRoutes(app, sequalize, version)
  messageRoutes(app, sequalize, version)
}