import { SEND_MESSAGE } from '../actions/chat'

export type TMessage = {
  username: string,
  isMine: boolean,
  text: string
}

export interface IChat {
  messages: Array<TMessage>
}

const initialState:IChat = {
  messages: [
    { username: 'ffb', isMine: true, text: 'Сообщение' },
    { username: 'olololo', isMine: false, text: 'Другое сообщение' },
  ]
}

export default (state=initialState, action: any):IChat => {
  switch (action.type) {
    case SEND_MESSAGE:
      return({
        messages: [...state.messages, action.payload]
      })
  
    default:
      return initialState
  }
}