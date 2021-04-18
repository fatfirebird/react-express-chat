import { PayloadAction } from '@reduxjs/toolkit'
import { SagaIterator } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import Cookies from 'js-cookie'

import AuthService from '../../services/Auth'
import * as actions from './'

export function* postAuthWorker({ payload }: PayloadAction): SagaIterator {
  try {
    const { data } = yield call(AuthService.login, payload)
    yield put(actions.postAuthSuccess(data))
    Cookies.set('token', data.token)
  } catch ({ error, status }) {
    console.log(error)
    yield put(actions.postAuthError(error.message))
  }
}

export function* watchLogin(): SagaIterator {
  yield takeLatest<PayloadAction>(actions.postAuth, postAuthWorker)
}
