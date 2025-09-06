import axios from 'axios'

const api = axios.create({
  baseURL: 'https://miandrilala.online',
  headers: { 'Content-Type': 'application/json' }
})

export default api
