import { createSlice } from '@reduxjs/toolkit'
import IUser from './types'

const initialState = {
  token: '',
  isLoading: false,
  isAuthorized: false,
  id: null,
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
      ...payload,
    }),
    postAuthError: (state, { payload: error }) => ({
      ...state,
      isLoading: false,
      error,
    }),
    getUser: (state, payload) => ({
      ...state,
      isLoading: true,
    }),
    getUserSuccess: (state, { payload }) => ({
      ...state,
      isLoading: false,
      ...payload,
    }),
    getUserError: (state, { payload: error }) => ({
      ...state,
      isLoading: false,
      error,
    }),

    logout: (state) => ({
      ...initialState,
    }),
  },
})

export const {
  postAuth,
  postAuthSuccess,
  postAuthError,

  getUser,
  getUserError,
  getUserSuccess,

  logout,
} = authSlice.actions
export default authSlice.reducer
