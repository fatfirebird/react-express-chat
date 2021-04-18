import { AxiosResponse } from 'axios'
import Request from '../Request'

export default class UserService {
  static addUser(payload: any): Promise<AxiosResponse<any>> {
    return Request.post('/user', payload)
  }

  static getUser(id: number): Promise<AxiosResponse<any>> {
    return Request.get(`/user/${id}`)
  }
}
