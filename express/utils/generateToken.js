const jwt = require('jsonwebtoken')


function generateToken(id) {
  return jwt.sign({ id: id }, process.env.SECRET, { expiresIn: '12h' })
}

module.exports = generateToken