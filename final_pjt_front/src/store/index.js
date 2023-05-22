import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import router from '@/router'
import movies from './modules/movies'
import communitys from './modules/communitys'
import createPersistedState from 'vuex-persistedstate'
// const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(
    ),
  ],
  modules: {
    movies,
    communitys,
  },
  state:{
    isLogin : false,
    token: null,
    reviews: [],
    review : null

    // userId_name:[],
    // userList : null,
    // userNameList : [0,],
    // config : null,
    // date : null,          // yyyy-mm-dd PM/AM yy:mm 형식 출력
    // betweenDate : null,   // 몇분전, 방금전 등으로 출력
    // LoginUser: null,
  },
  mutations:{
    
  }
})
