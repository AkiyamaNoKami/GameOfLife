import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateTaskView from '../components/CreateTaskView.vue'
import FoodView from "../components/FoodView.vue"
import SportView from "../components/SportView.vue"
import EmotionsView from "../components/EmotionsView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/create-new-task',
    name: 'createNewTask',
    component: CreateTaskView
  },
  {
    path: '/health/food',
    name: 'food',
    component: FoodView
  },
  {
    path: '/health/sport',
    name: 'sport',
    component: SportView
  },
  {
    path: '/health/emotions',
    name: 'emotions',
    component: EmotionsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
