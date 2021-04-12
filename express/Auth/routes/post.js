const generateToken = require('../../utils/generateToken')
const bcrypt = require('bcrypt')

module.exports = (app, UserModel, path) => {
  return app.post(path, async (req, res, next) => {
    try {
      const { name, password } = req.body

      if (!name || !password) res.status(401).send({message: 'Invalid name or password'})

      const user = await UserModel.findOne({
        where: {
          name: name
        }
      })

      if (!user) res.status(401).send({message: 'User does not exists'})

      const match = await bcrypt.compare(password, user.hash)

      if (!match) {
        res.status(401).send({message: 'Invalid name or password'})
      } else {
        const token = generateToken(user.id)
        res.send({token: token})
      }
    } catch (error) {
      next(error)
    }
  })
}