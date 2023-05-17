import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import CommunityView from '@/views/CommunityView'
import MypageView from '@/views/MypageView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/CommunityView',
    name: 'CommunityView',
    component: CommunityView
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
