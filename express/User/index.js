const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

router.post('/:id', verifyToken, (req, res, err) => {
  console.log('post')
  res.send({some: 'json'})

})

router.get('/', verifyToken, (req, res, err) => {
  console.log('get')
  res.send({some: 'json'})
})

module.exports = router