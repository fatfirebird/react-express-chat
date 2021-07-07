import { createSlice } from '@reduxjs/toolkit'
import IChat from './types'

const initialState = {
  messages: [
    { isMine: true, text: 'sdffsd', username: 'dfsfds' },
    { isMine: false, text: 'sdffsd', username: 'dfsfds' },
    { isMine: false, text: 'sdffsd', username: 'dfsfds' },
  ],
} as IChat

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    connectChat: (state) => ({
      ...state,
      isLoading: true,
    }),
    connectChatSuccess: (state) => ({
      ...state,
      isLoading: false,
    }),
    connectChatError: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
})

export const {
  connectChat,
  connectChatSuccess,
  connectChatError,
} = chatSlice.actions
export default chatSlice.reducer
