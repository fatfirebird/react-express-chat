const hashPassword = require('../../utils/hashPassword')
const generateToken = require('../../utils/generateToken')

module.exports = (app, UserModel, path) => {
  return app.post(path, async (req, res, next) => {
    try {
      const { name, password } = req.body
    
      // шифруем пароль
      const hash = await hashPassword(password, 5)

      const user = await UserModel.create({name, hash})

      const token = generateToken(user.id)

      res.send({token: token})  
    } catch (error) {
      next(error)
    }
  })
}