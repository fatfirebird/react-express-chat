import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import IUser from './User/types'
import { IChat } from './Chat/chat'

export interface IRootState {
  user: IUser
  chat: IChat
}

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
)

saga.run(rootSaga)

export default store
