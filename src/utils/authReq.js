import axios from 'axios'
const Storage = require('chrome-storage/index')

const authReq = (path, method = 'get', body = null) => {

  const token = Storage.get('token')

  return axios(`${process.env.REACT_APP_BASE_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    },
    data: body
  })
}

export default authReq