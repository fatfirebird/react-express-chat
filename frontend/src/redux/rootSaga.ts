import { all } from '@redux-saga/core/effects'
import { watchLogin } from './User/saga'

export default function* rootSaga() {
  yield all([watchLogin()])
}
