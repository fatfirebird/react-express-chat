const model = require('./model')

const post = require('./routes/post')
const get = require('./routes/get')


module.exports = (app, sequelize, version) => {
  const UserModel = model(sequelize)
  const path = `${version}/user`

  post(app, UserModel, path)
  get(app, UserModel, path)
}