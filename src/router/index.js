import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Model3 from '../views/Model3.vue'
import ModelS from '../views/ModelS.vue'
import ModelX from '../views/ModelX.vue'
import ModelY from '../views/ModelY.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/model3',
    name: 'model3',
    component: Model3
  },
  {
    path: '/models',
    name: 'models',
    component: ModelS
  },
  {
    path: '/modelx',
    name: 'modelx',
    component: ModelX
  },
  {
    path: '/modely',
    name: 'modely',
    component: ModelY
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
