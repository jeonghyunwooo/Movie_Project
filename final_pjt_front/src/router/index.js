import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import ReviewView from '@/views/ReviewView'
import ReviewCreateView from '@/views/ReviewCreateView'
import MypageView from '@/views/MypageView'
import LoginView from '@/views/LoginView'
import SignUpView from '@/views/SignUpView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/SignUpView',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  },
  
  {
    path: '/ReviewView',
    name: 'ReviewView',
    component: ReviewView
  },
  {
    path: '/ReviewCreateView',
    name: 'ReviewCreateView',
    component: ReviewCreateView
  },
  {
    path: '/MypageView',
    name: 'MypageView',
    component: MypageView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
