<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>
<script setup></script>
<style scoped>
.wrapper {
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  border-radius: 15px;
}
</style>
