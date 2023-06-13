import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
import movies from './modules/movies'
import communitys from './modules/communitys'
import createPersistedState from 'vuex-persistedstate'
const API_URL = 'http://127.0.0.1:8000'

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
  //==========================state==============================
  state:{
    token: null,

    // userId_name:[],
    // userList : null,
    // userNameList : [0,],
    // config : null,
    // date : null,          // yyyy-mm-dd PM/AM yy:mm 형식 출력
    // betweenDate : null,   // 몇분전, 방금전 등으로 출력
    // LoginUser: null,
  },

  //==========================getters============================
  getters:{
    isLogin(state){
      return state.token ? true : false
    }

  },

  //=========================mutations===========================
  mutations:{
    // 완료하면 토큰 발급
    SAVE_TOKEN(state, token){
      state.token = token
      router.push({name : 'HomeView'})
    },
  },

  //=========================actions=============================
  actions:{

    // 로그인
    login(context, payload) {
      const username = payload.username
      const password = payload.password

      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username, password
        }
      })
        .then((res) => {
          context.commit('SAVE_TOKEN', res.data.key)
          // context.commit('LOGIN')
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            console.log(error.response.data);
          } else {
            console.log(error);
          }
        });

        // .catch(()=>{
        //   alert('아이디 또는 비밀번호가 잘못 입력 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요!')
        //   this.$refs.form.reset()
        // })
    },
    
    // 회원가입
    signUp(context, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2      

      axios({
        method: 'post',
        url: `http://127.0.0.1:8000/accounts/signup/`,
        data: {username,password1,password2}
        })
        .then((res) => {
          // console.log(res)
          context.commit('SAVE_TOKEN', res.data.key)
          // router.push({name : 'LoginView'})
        })
        //  ValidationError 예외가 발생한 경우 error.response.data를 출력
        .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data);
        } else {
          console.log(error);
        }
      });
    },
  }
})
