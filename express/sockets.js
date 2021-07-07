const model = require('./Message/model')

module.exports = function (io, sequelize) {
  io.on('connect', async (socket) => {
    const messages = await model(sequelize).getMessages(10)
    await model(sequelize).createNewMessage({name: 'ddddd', text: 'ddd'})

    socket.emit('get_messages', messages)
  })

  io.on('send_message', async (socket) => {
    console.log(123)
  })
}