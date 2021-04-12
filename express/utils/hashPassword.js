const bcrypt = require('bcrypt')

module.exports = async function hashPassword(password, saltRound) {
  return await bcrypt.hash(password, saltRound).then(hash => hash)
}