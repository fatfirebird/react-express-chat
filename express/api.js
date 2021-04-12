const bodyParser = require('body-parser')


const userRoutes = require('./User')
const authRoutes = require('./Auth')


module.exports = (app, sequalize) => {
  // api v1
  const version = '/api'
  
  app.use(bodyParser.json())

  userRoutes(app, sequalize, version)
  authRoutes(app, sequalize, version)
}