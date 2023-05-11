<template>
  <div class="todolist">
    <h1>This is an todolist page</h1>
    <TodoInput />
    <TodoList />
  </div>
</template>
<script setup>
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'
</script>

<style>
.todolist {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
}
</style>
