<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import router from '@/router'

onMounted(() => {
  router.push({ path: '/account' })
})
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/account"></RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
