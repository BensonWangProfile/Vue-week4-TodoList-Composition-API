<template>
  <div class="wrapper">
    <div class="wrapper_logo">logo</div>
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
  justify-content: space-between;
  align-items: center;
}
</style>
