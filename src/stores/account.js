import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccountStore = defineStore('account', () => {
  const token = ref('')
  token.value = localStorage.getItem('token')
  return { token }
})
