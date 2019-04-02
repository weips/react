import axios from 'axios'
import { message } from 'antd'
axios.interceptors.response.use(res => {
  let { code, message: msg } = res.data
  if (res.data) {
    if (code === 'Y') {
      message.success(msg)
      return res.data
    } else if (code === 'N') {
      message.error(msg)
      throw new Error(msg)
      // return Promise.reject(res.data.message)
    } else {
      return res
    }
  } else {
    return res
  }
}, err => {
  let status = err.response && err.response.status
  let statusText = err.response && err.response.statusText
  message.error(`${status} ${statusText}`)
  return Promise.reject(`${status} ${statusText}`)
})

export default function http (options) {
  let { method = 'GET', url, data, params } = options
  url = '/api' + url
  return axios({
    method,
    url,
    data,
    params
  })
}