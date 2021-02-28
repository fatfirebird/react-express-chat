module.exports = (app, UserModel, path) => {
  return app.get(`${path}/:id`, async (req, res, next) => {
    try {
      const id = req.params.id

      const user = await UserModel.findAll({
        where: {
          id: id
        }
      })

      if (!user) res.status(400).send({user: 'user does not exists'})

      console.log(user)
      res.send({
        name: user.name
      })  
    } catch (error) {
      next(error)
    }
  })
}