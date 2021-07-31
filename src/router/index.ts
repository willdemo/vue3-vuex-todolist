import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Todo from '../views/todo/index.vue'
import About from '../views/todo/about.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Todo',
    component: Todo,
    meta: {
      title: 'Vue todo list'
    }
  },

  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Vue todo list'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
