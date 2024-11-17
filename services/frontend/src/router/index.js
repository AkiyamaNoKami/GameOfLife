import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateTaskView from '../components/CreateTaskView.vue'
import FoodView from "../components/FoodView.vue"
import SportView from "../components/SportView.vue"
import EmotionsView from "../components/EmotionsView.vue"
import InProgressTaskView from "../components/InProgressTaskView.vue"
import LearningView from "@/components/LearningView.vue";


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
    path: '/tasks/inprogress',
    name: 'inProgressTask',
    component: InProgressTaskView
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
  {
    path: '/study/learning',
    name: 'learning',
    component: LearningView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
