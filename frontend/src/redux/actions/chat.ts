export const SEND_MESSAGE = 'SEND_MESSAGE'

export const sendMessage = (type:typeof SEND_MESSAGE, payload: any):{type:typeof SEND_MESSAGE, payload: any} => {
  console.log(1111111)
  return ({type, payload}) 
}