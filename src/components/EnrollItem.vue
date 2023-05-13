<template>
  <div>
    <VForm v-slot="{ errors, meta }" class="form">
      <label for="enrollEmail" class="form_input"
        ><span> Email </span>
        <VField
          id="enrollEmail"
          v-model.trim="enrollData.email"
          name="email"
          type="email"
          label="信箱"
          rules="required|email"
          :class="{ error: errors.email }"
      /></label>
      <ErrorMessage name="email" class="error-message" />
      <label for="userName" class="form_input"
        ><span> userName </span>
        <VField
          id="userName"
          v-model.trim="enrollData.userName"
          name="userName"
          type="text"
          label="信箱"
          rules="required"
          :class="{ error: errors.userName }"
      /></label>
      <ErrorMessage name="userName" class="error-message" />
      <label for="enrollPassword" class="form_input"
        ><span> 密碼 </span>
        <VField
          id="enrollPassword"
          v-model.trim="enrollData.password"
          name="password"
          type="password"
          rules="required|min:6"
          :class="{ error: errors.password }"
        />
      </label>
      <ErrorMessage name="password" class="error-message" />
      <label for="confirmPassword" class="form_input"
        ><span> 確認密碼 </span>
        <VField
          id="confirmPassword"
          label="確認密碼"
          v-model.trim="enrollData.confirmPassword"
          name="confirmPassword"
          type="password"
          rules="required|confirmed:@password"
          :class="{ error: errors.confirmPassword }"
        />
      </label>
      <ErrorMessage name="confirmPassword" class="error-message" />
      <button type="submit" :disabled="!meta.valid" @click.prevent="enroll">註冊</button>
      <button type="button" @click="toLogin">登入頁面</button>
    </VForm>
  </div>
</template>
<script setup>
import apis from '@/apis/client.js'
import { reactive } from 'vue'
import router from '@/router'

const { apiPostEnroll } = apis

const enrollData = reactive({
  userName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const enroll = async () => {
  try {
    const user = {
      email: enrollData.email,
      nickname: enrollData.userName,
      password: enrollData.password
    }
    console.log(user)
    const res = await apiPostEnroll({ user })
    console.log(res)
    router.push({ path: '/account' })
  } catch (error) {
    console.log(error)
  }
}

const toLogin = () => {
  router.push({ path: '/account' })
}
</script>
<style lang=""></style>
