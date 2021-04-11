const model = require('../User/model')

const post = require('./routes/post')


module.exports = (app, sequelize, version) => {
  const UserModel = model(sequelize)
  const path = `${version}/auth`

  post(app, UserModel, path)
}