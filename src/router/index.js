import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LoginView.vue'),
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../components/LoginItem.vue')
        },
        {
          path: 'enroll',
          name: 'enroll',
          component: () => import('../components/EnrollItem.vue')
        }
      ]
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/LoginView.vue'),
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../components/LoginItem.vue')
        },
        {
          path: 'enroll',
          name: 'enroll',
          component: () => import('../components/EnrollItem.vue')
        }
      ]
    },
    // {
    //   path: '/enroll',
    //   name: 'signup',
    //   component: () => import('../components/EnrollItem.vue')
    // },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/TodoView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/todos') {
    if (localStorage.getItem('nickname')) {
      next()
    } else {
      alert('沒有nickname,無法切換路由')
    }
  } else {
    next()
  }
})

export default router
