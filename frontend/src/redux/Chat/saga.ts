import { takeLatest } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { SagaIterator } from 'redux-saga'
import websocket from '../../services/Websocket'
import store from '../store'
import * as actions from './index'

function* connectChatWorker() {
  try {
    yield websocket.connect()

    websocket.on('connect', () => {
      store.dispatch(actions.connectChatSuccess())
    })

    websocket.on('get_messages', (content) => {
      console.log(content)
    })
  } catch {
    websocket.on('connect_error', (err) => {
      console.log(err)
      store.dispatch(actions.connectChatError(err))
      setTimeout(() => websocket.connect(), 5000)
    })
  }
}

export function* watchChat(): SagaIterator {
  yield takeLatest<PayloadAction>(actions.connectChat, connectChatWorker)
}
