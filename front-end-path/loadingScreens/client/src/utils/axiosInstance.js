import axios from 'axios'

// let headers = {}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8800',
  // headers,
})

export default axiosInstance
