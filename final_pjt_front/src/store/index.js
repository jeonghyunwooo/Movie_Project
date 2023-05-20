import Vue from 'vue'
import Vuex from 'vuex'
import movies from './modules/movies'
import communitys from './modules/communitys'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movies,
    communitys,
  },

})
