<template>
  <div class="about">
    <VForm v-slot="{ errors, meta }" class="form">
      <label for="email" class="form_input"
        ><span> Email </span>
        <VField
          id="email"
          v-model.trim="loginData.email"
          name="email"
          type="email"
          label="信箱"
          rules="required|email"
          :class="{ error: errors.email }"
      /></label>
      <ErrorMessage name="email" />
      <label for="password" class="form_input"
        ><span> 密碼 </span>
        <VField
          id="password"
          label="密碼"
          v-model.trim="loginData.password"
          name="password"
          type="password"
          rules="required|min:6"
          :class="{ error: errors.password }"
        />
      </label>
      <ErrorMessage name="password" />
      <button type="button" :disabled="!meta.valid" @click.prevent="Login" @keydown.enter="Login">
        登入
      </button>
      <button type="button" @click="toEroll">註冊</button>
    </VForm>
  </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import apis from '@/apis/client.js'

import router from '@/router'
const { apiPostLogin } = apis
const loginData = reactive({
  email: '',
  password: ''
})

const Login = async () => {
  try {
    const user = {
      email: loginData.email,
      password: loginData.password
    }
    const res = await apiPostLogin({ user })
    await localStorage.setItem('token', res.headers.authorization)
    await localStorage.setItem('nickname', res.data.nickname)
    console.log('api suc')
    toTodos()
  } catch (error) {
    console.log(error)
  }
}
const clearLocalStorage = () => {
  localStorage.removeItem('nickname')
  localStorage.removeItem('token')
}

const toTodos = () => {
  router.push({ path: '/todos' })
}
const toEroll = () => {
  router.push({ path: '/account/enroll' })
}

onMounted(() => {
  clearLocalStorage()
})
</script>
<style>
.form {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
}
.form_input {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
</style>
