import request from './request'

const apiCheckLogin = (token) => {
  return request.get('/check', token)
}
const apiGetTodos = (token) => {
  return request.get('/todos', token)
}
const apiPostTodos = (todo, token) => {
  return request.post('/todos', todo, token)
}
const apiDeleteTodos = (todoId, token) => {
  return request.delete(`/todos/${todoId}`, token)
}
const apiPatchTodoDone = (todoId, token) => {
  return request.patch(`/todos/${todoId}/toggle`, {}, token)
}

export default {
  apiCheckLogin,
  apiGetTodos,
  apiPostTodos,
  apiDeleteTodos,
  apiPatchTodoDone
}
