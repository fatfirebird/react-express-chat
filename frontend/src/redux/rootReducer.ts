import { combineReducers } from 'redux'
import userReducer from './User'
import chatReducer from './Chat/chat'

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
})

export default rootReducer
