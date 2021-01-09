import { LOGIN } from '../actions/user'

export interface IUser {
  name: string,
  password: string
  isAuthorized: boolean
}

const initialState: IUser = {
  name: '',
  password: '',
  isAuthorized: false
}

export default (state = initialState, action: any): IUser => {
  switch(action.type) {
    case LOGIN:
      return{
        ...state,
        isAuthorized: true
      }
    
    default:
      return state
  }
}