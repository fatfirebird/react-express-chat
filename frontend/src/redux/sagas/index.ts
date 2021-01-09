import { takeEvery } from 'redux-saga/effects'
import { LOGIN } from '../actions/user'

export function* sagatest(): Generator {
  yield console.log('1')
}

export function* watchLogin(): Generator {
  yield takeEvery(LOGIN, sagatest)
}