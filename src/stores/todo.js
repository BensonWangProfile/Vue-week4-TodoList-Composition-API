import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const status = ref('全部')
  const todoList = ref([])

  return {
    status,
    todoList
  }
})
