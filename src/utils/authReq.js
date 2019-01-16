import axios from 'axios'

const getChromeStorageLocal = (key) =>{
  return new Promise((resolve, reject) => {
      window.chrome.storage.local.get([key], (result) => {
        if(result && result.token && result.token.token){
          resolve(result.token.token)
        }
        else {
          resolve('')
        }
      })
  })
}


const authReq = (path, method = 'get', body = null) => {
  return getChromeStorageLocal('token')
    .then(token => {
      return axios(`${process.env.REACT_APP_BASE_URL}${path}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token !== '' ? `Bearer ${token}` : ''
        },
        data: body
      })
    })
    .catch(err => {
      console.log('Token does not exist in local storage, please login')
    })
}

export default authReq