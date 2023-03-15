// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Next from '@/views/next.vue'
import { createApp } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/next',
    name: 'Next',
    component: Next,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

const app =createApp({})
app.use(router)

app.mount('#app')

export default router
