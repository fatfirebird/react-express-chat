const express = require('express')
require('dotenv').config()
const app = express()


app.get('/', (req, res) => {
  res.send('хуй соси быдло ебаное')
})

app.listen(process.env.PORT, () => {
  console.log(`started on port: ${process.env.PORT}`)
})