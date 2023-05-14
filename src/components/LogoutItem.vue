<template lang="">
  <button @click="logout" type="button" class="logout-btn">登出</button>
</template>
<script setup>
import apis from '@/apis/client.js'
import router from '@/router'

const { apiDeleteLogout } = apis
const token = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

const logout = async () => {
  try {
    await apiDeleteLogout(token)
    localStorage.removeItem('authorization')
    localStorage.removeItem('nickname')
    router.push({ path: '/account' })
  } catch (error) {
    console.log(error)
  }
}
</script>
<style scoped>
.logout-btn {
  padding: 10px;
  border-radius: 8px;
}
</style>
