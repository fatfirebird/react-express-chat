import { AxiosResponse } from 'axios'
import Request from '../Request'

export default class AuthService {
  static login(payload: any): Promise<AxiosResponse<any>> {
    return Request.post('/auth', payload)
  }
}
