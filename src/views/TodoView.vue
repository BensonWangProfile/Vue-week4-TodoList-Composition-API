<template>
  <div class="header">
    <LogoutItem />
  </div>
  <div class="todolist">
    <h1>待辦事項</h1>
    <TodoInput />
    <TodoList />
  </div>
</template>
<script setup>
import LogoutItem from '../components/LogoutItem.vue'
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
}
.todolist {
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 15px;
}
</style>
