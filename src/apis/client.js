import request from './request'

const apiPostLogin = (userData) => request.post('/users/sign_in', userData)
const apiPostEnroll = (userData) => request.post('/users', userData)
const apiDeleteLogout = (token) => request.delete('/users/sign_out', token)

export default {
  apiPostLogin,
  apiPostEnroll,
  apiDeleteLogout
}
