import axios from 'axios'

const getChromeStorageLocal = (key) =>{
  return new Promise((resolve, reject) => {
    window.chrome.storage.local.get([key], (result) => {
      resolve(result.token.token)
      // console.log('YUP', result.token.token)
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
  
  
  

}

export default authReq