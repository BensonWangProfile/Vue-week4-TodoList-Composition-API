import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      console.log('Not Found')
    }
    return Promise.reject(error)
  }
)

export default request
