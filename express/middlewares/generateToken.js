const jwt = require('jsonwebtoken')


function generateToken(id) {
  return jwt.sign(id, process.env.SECRET)
}

module.exports = generateToken