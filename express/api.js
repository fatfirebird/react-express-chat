const bodyParser = require('body-parser')


const userRoutes = require('./User') 


module.exports = (app, sequalize) => {
  // api v1
  const version = '/api'
  
  app.use(bodyParser.json())

  userRoutes(app, sequalize, version)
}