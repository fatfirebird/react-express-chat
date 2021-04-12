import { createSlice } from '@reduxjs/toolkit'
import IUser from './types'

const initialState = {
  token: '',
  isLoading: false,
  isAuthorized: false,
} as IUser

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    postAuth: (state, payload) => ({
      ...state,
      isLoading: true,
    }),
    postAuthSuccess: (state, { payload }) => ({
      ...state,
      isLoading: false,
      isAuthorized: true,
      token: payload,
    }),
    postAuthError: (state, { payload: error }) => ({
      ...state,
      isLoading: false,
      error,
    }),
  },
})

export const { postAuth, postAuthSuccess, postAuthError } = authSlice.actions
export default authSlice.reducer
