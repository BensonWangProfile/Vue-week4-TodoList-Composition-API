<template>
  <div class="wrapper">
    <div class="wrapper_account">
      <RouterView />
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
