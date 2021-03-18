import axios from 'axios'

const service = axios.create({
  baseURL: '',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    console.log(config);
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    console.log(error)
    return Promise.reject(error)
  }
)
// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // if the code is not 200, it is judged as an error.
    if (res.code !== 200) {
      return Promise.reject(res || 'Error')
    } else {
      return res
    }
  },
  error => {
    // do something with response error
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
