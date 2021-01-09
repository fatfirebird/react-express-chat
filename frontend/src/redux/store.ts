import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'
import { sagatest } from './sagas'
import { IUser } from './reducers/user'

export interface IRootState {
  user: IUser
}

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(saga)
  )
)

saga.run(sagatest)

export default store