import Request from '../Request'

export default class AuthService {
  static login(payload: any) {
    return Request.post('/auth', payload)
  }
}
