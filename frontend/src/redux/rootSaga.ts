import { all } from '@redux-saga/core/effects'
import { watchChat } from './Chat/saga'
import { watchLogin } from './User/saga'

export default function* rootSaga() {
  yield all([watchLogin(), watchChat()])
}
