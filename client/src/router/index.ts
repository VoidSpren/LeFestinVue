import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaqView from '../views/FaqView.vue'
import LoginView from '../views/LoginView.vue'
import SignView from '../views/SignView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'public', component: HomeView },
    { path: '/faq', name: 'faq', component: FaqView },
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/sign', name: 'Sign', component: SignView },
    // { path: '/my', name: 'private', component: }
  ]
})

export default router
