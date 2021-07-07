import axios, { AxiosError } from 'axios'

const Request = axios.create({
  baseURL: process.env.REACT_APP_URL ?? '/api',
  timeout: 20000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'chat-auth': '',
  },
})

Request.interceptors.request.use((config) => {
  return config
})

Request.interceptors.response.use(
  (config) => config,
  (err: AxiosError) => {
    const error = err.response?.data
    const status = err.response?.status

    return Promise.reject({
      error,
      status,
    })
  }
)

export default Request
