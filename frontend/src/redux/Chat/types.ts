export type TMessage = {
  username: string
  isMine: boolean
  text: string
}

export default interface IChat {
  messages: Array<TMessage>
}
