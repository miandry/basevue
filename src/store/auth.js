import { defineStore } from 'pinia'
import api from '../services/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('authUser')) || null,
    token: localStorage.getItem('authToken') || null,
    loading: false,
    error: null
  }),

  getters: {
    isLoggedIn: (state) => !!state.user && !!state.token
  },

  actions: {
    async register(payload) {
        this.loading = true
        this.error = null
        try {
          // Exemple API: POST /register
          const res = await api.post('/api/user/register', payload)
  
          // On considère que l’API renvoie { user, token }
          this.user = res.data.user
          this.token = res.data.token
  
          localStorage.setItem('authUser', JSON.stringify(this.user))
          localStorage.setItem('authToken', this.token)
          api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        } catch (err) {
          this.error = err.response?.data?.message || 'Erreur lors de l’inscription'
        } finally {
          this.loading = false
        }
    },
    async login(credentials) {
      this.loading = true
      this.error = null
      try {
        // Exemple : POST /api/login
        const res = await api.post('/api/user/login', credentials) // pas besoin de répéter baseURL
        this.user = res.data.user
        this.token = res.data.token

        // Persistance dans localStorage
        localStorage.setItem('authUser', JSON.stringify(this.user))
        localStorage.setItem('authToken', this.token)

        // Configuration axios pour toutes les requêtes
       // axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
      } catch (err) {
        this.error = err.response?.data?.message || 'Erreur de connexion'
      } finally {
        this.loading = false
      }
    },

    async logout() {
      try {
        // Exemple : POST /api/logout
        this.user = null
        this.token = null
        localStorage.removeItem('authUser')
        localStorage.removeItem('authToken')
      } catch (err) {
        console.error('Erreur logout:', err)
      }
    },

    loadFromStorage() {
      const user = localStorage.getItem('authUser')
      const token = localStorage.getItem('authToken')
      if (user && token) {
        this.user = JSON.parse(user)
        this.token = token
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
      }
    }
  }
})
