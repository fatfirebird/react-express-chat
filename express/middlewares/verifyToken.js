const jwt = require('jsonwebtoken')


function verifyToken(req, res, next) {
  const auth = req.headers.authorization
  if (!auth) return res.sendStatus(401)


  jwt.verify(auth, process.env.SECRET, (err, decoded) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    next()
  })

}

module.exports = verifyToken