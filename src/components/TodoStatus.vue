<template lang="">
  <div>
    <ul class="status">
      <li class="status_li" :class="{ status_active: status === '全部' }">
        <button class="status_btn" type="button" @click="setStatus('全部')">全部</button>
      </li>
      <li class="status_li" :class="{ status_active: status === '待完成' }">
        <button class="status_btn" type="button" @click="setStatus('待完成')">待完成</button>
      </li>
      <li class="status_li" :class="{ status_active: status === '已完成' }">
        <button class="status_btn" type="button" @click="setStatus('已完成')">已完成</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todo'

const store = useTodoStore()
const { status } = storeToRefs(store)

const setStatus = (str) => {
  status.value = str
}
</script>
<style scoped>
.status {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
}
.status_li {
  width: 100%;
}
.status_active {
  outline: 1px solid wheat;
  border-radius: 10px;
}
.status_btn {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 10px;
}
</style>
