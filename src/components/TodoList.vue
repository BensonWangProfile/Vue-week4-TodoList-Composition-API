<template lang="">
  <div>
    <TodoStatus />
    <ul class="todolist_list">
      <li v-for="(item, key) in todoListFilter" :key="key" class="todolist_item">
        <n-checkbox :checked="item.completed_at !== null" @click="todoBeDone(item.id)"></n-checkbox>
        <p :class="{ done: item.completed_at }">
          {{ item.content }}
        </p>
        <p @click="todoBeDelete(item.id)">x</p>
      </li>
    </ul>
    <div>{{ undoNum }} 個待完成項目</div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue'
import TodoStatus from './TodoStatus.vue'
import { useTodoStore } from '../stores/todo'
import { storeToRefs } from 'pinia'
// import { apiPatchTodoDone, apiDeleteTodos } from '@/apis/todos.js'
import apis from '@/apis/todos.js'
import { NCheckbox } from 'naive-ui'

const { apiGetTodos, apiPatchTodoDone, apiDeleteTodos } = apis

const store = useTodoStore()
const { todoList, status } = storeToRefs(store)

const todoListFilter = ref([])
const undoNum = ref(0)
const token = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

const getTodos = async () => {
  try {
    const res = await apiGetTodos(token)
    todoList.value = res.data.todos
    countUndos()
  } catch (error) {
    // console.log('getTodos', error)
  }
}

const countUndos = () => {
  undoNum.value = 0
  todoList.value.forEach((item) => {
    if (item.completed_at === null) {
      undoNum.value += 1
    }
  })
}

const checkStatus = () => {
  todoListFilter.value = todoList.value
  countUndos()

  if (status.value == '待完成') {
    todoListFilter.value = todoList.value.filter((item) => {
      return item.completed_at === null
    })
  }
  if (status.value == '已完成') {
    todoListFilter.value = todoList.value.filter((item) => {
      return item.completed_at !== null
    })
  }
}

const todoBeDone = async (id) => {
  try {
    const res = await apiPatchTodoDone(id, token)
    console.log(res)
    getTodos()
  } catch (error) {
    // console.log(error)
  }
}

const todoBeDelete = async (id) => {
  try {
    const res = await apiDeleteTodos(id, token)
    console.log(res)
    getTodos()
  } catch (error) {
    // console.log(error)
  }
}

// 當 status 切換要觸發 todoList filter
watch(
  [status, todoList],
  () => {
    checkStatus()
  },
  { immediate: true }
)

onMounted(async () => {
  await checkStatus()
})
</script>

<style scoped>
.todolist_list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
}
.todolist_item {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.done {
  text-decoration: line-through;
}
</style>
