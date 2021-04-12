import Request from '../Request'

export default class UserService {
  static addUser(payload: any) {
    return Request.post('/user', payload)
  }
}
