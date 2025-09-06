<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm p-6 bg-white rounded-xl shadow-lg">
      <h2 class="mb-4 text-2xl font-bold text-center">Connexion</h2>
      <input v-model="email" type="email" placeholder="Email"
             class="w-full mb-3 p-2 border rounded-md focus:ring focus:ring-blue-400"/>
      <input v-model="password" type="password" placeholder="Mot de passe"
             class="w-full mb-3 p-2 border rounded-md focus:ring focus:ring-blue-400"/>
      <button @click="loginUser"
              class="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Se connecter
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../store/auth'

const email = ref('')
const password = ref('')
const auth = useAuthStore()

const loginUser = () => {
  auth.login({ email: email.value, password: password.value })
}
</script>
