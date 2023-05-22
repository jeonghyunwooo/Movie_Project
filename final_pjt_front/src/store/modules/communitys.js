import axios from 'axios'
import router from '@/router'

const API_URL = 'http://127.0.0.1:8000'

export default{
  //==========================state==============================
  state: {
    reviews: [],
  },
  //==========================getters============================
  getters: {
    reviews : (state) => state.reviews,
  },

  //=========================mutations===========================
  mutations: {
    CREATE_REVIEW() {
      router.push({name:"ReviewView"})
    },
    GET_REVIEWS(state,reviews) {
      state.reviews = reviews
    }
  },

  //=========================actions=============================
  actions: {
    // 리뷰 작성
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

    // 리뷰data 가져오기
    getReviews(context) {
      axios({
        method: 'get',
        url:`${API_URL}/communitys/reviews/`,
      })
        .then((res) => {
          context.commit('GET_REVIEWS',res.data)
      })
        .catch((error) => {
          if (error.response && error.response.data) {
            console.log(error.response.data);
          } else {
            console.log(error);
          }
      });
    }
  }
}



