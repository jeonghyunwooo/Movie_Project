import axios from 'axios'
import router from '@/router'

const API_URL = 'http://127.0.0.1:8000'

export default{
  state: {
    reviews: [],
  },
  getters: {
    reviews : (state) => state.reviews,
  },
  mutations: {
    CREATE_REVIEW() {
      router.push({name:"ReviewView"})
    },
    GET_REVIEWS(state,reviews) {
      state.reviews = reviews
    }
  },
  actions: {
    createReview(context, payload){
      const title = payload.title
      const movie = payload.movie
      const content = payload.content

      if (!title) {
        alert('제목 입력해주세요')
        return
      } else if (!movie){
        alert('영화 입력해주세요')
        return
      } else if (!content){
        alert('내용 입력해주세요')
        return
      }

      axios({
        method: 'post',
        url:`${API_URL}/communitys/reviews/`,
        data:{title, movie, content},
      })
      .then(() => {
        context.commit('CREATE_REVIEW')
      })
      .catch((err) => {
        console.log(err)
      })
    },
    getReviews(context) {
      axios({
        method: 'get',
        url:`${API_URL}/communitys/reviews/`,
      })
        .then((res) => {
          context.commit('GET_REVIEWS',res.data)
        })
        .catch((err) => {
          console.log(err)
      })
    }
  }
}



