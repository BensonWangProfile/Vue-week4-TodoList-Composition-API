<template lang="">
  <div class="todolist_inputbox">
    <input class="todolist_input" type="text" v-model.trim="todoInput" @keydown.enter="postTodos" />
    <button type="button" @click="postTodos">+</button>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import apis from '@/apis/todos.js'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todo'

const store = useTodoStore()
let { todoList } = storeToRefs(store)

const todoInput = ref('')
const { apiGetTodos, apiPostTodos } = apis
const token = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

const getTodos = async () => {
  try {
    const res = await apiGetTodos(token)
    todoList.value = res.data.todos
  } catch (error) {
    console.log('getTodos', error)
  }
}

const postTodos = async () => {
  if (todoInput.value === '') {
    console.log('please add something')
    return
  }
  try {
    const res = await apiPostTodos({ todo: { content: todoInput.value } }, token)
    console.log('postTodos', res)
    todoInput.value = ''
    // 這邊要在加 status 的條件
    getTodos()
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getTodos()
})
</script>
<style>
.todolist_inputbox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.todolist_input {
  width: 85%;
}
</style>
