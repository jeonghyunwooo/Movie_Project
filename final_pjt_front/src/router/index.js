import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView'
import SignUpView from '@/views/SignUpView'
import HomeView from '@/views/HomeView'
import CommunityView from '@/views/CommunityView'
import ReviewView from '@/views/ReviewView'
import ReviewCreateView from '@/views/ReviewCreateView'
import ReviewUpdateView from '@/views/ReviewUpdateView'
import ReviewDetail from '@/views/ReviewDetail'
import PlayListView from '@/views/PlayListView'
import MypageView from '@/views/MypageView'

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
    path: '/CommunityView',
    name: 'CommunityView',
    component: CommunityView,
    children:[ 
      {
        path: '/ReviewView',
        name: 'ReviewView',
        component: ReviewView
      },
      {
        path: '/PlayListView',
        name: 'PlayListView',
        component: PlayListView
      },
      {
        path: '/ReviewCreateView',
        name: 'ReviewCreateView',
        component: ReviewCreateView
      },
      {
        path: '/ReviewUpdateView/:id',
        name: 'ReviewUpdateView',
        component: ReviewUpdateView
      },
    ]
  },
  
  {
    path: '/:id',
    name: 'ReviewDetail',
    component: ReviewDetail
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
