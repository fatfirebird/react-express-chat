const express = require('express')
const router = express.Router()

router.post('/:id', (req, res, err) => {
  console.log('post')
  res.send({some: 'json'})

})

router.get('/', (req, res, err) => {
  console.log('get')
  res.send({some: 'json'})
})

module.exports = router