import axios from 'axios'

const api = axios.create({
  baseURL: window.SERVER_URL,
  headers: { 'Content-Type': 'application/json' }
})

export default api
