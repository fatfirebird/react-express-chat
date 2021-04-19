import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/es/storage'
import { persistReducer } from 'redux-persist'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import IUser from './User/types'
import { IChat } from './Chat/chat'
export interface IRootState {
  user: IUser
  chat: IChat
}

const persistedReducer = persistReducer<IRootState>(
  {
    key: 'chat',
    storage,
    whitelist: ['user'],
  },
  rootReducer
)

const saga = createSagaMiddleware()

const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(saga))
)

saga.run(rootSaga)

export default store
