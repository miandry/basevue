import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Login from '../pages/user/Login.vue'
import SignUp from '../pages/user/SignUp.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'SignUp', component: SignUp }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
