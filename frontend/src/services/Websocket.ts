import { io } from 'socket.io-client'

const websocket = io(process.env.REACT_APP_WS ?? '/api', {
  autoConnect: false,
  auth: {
    token: '',
  },
  path: '/api/chat',
  transports: ['websocket'],
})

export default websocket
