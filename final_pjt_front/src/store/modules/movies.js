import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'

export default{
  plugins: [
    createPersistedState({
    }),
  ],
  //==========================state==============================
  state: {
    total_movies : [],
    popular_movies : [], // 영화목록(인기) 전체 data
    toprated_movies : [], // 영화목록(평점순) 전체 datav
    movie_detail : '', // 영화목록 세부 data
    genre_movies : [], // 장르별 영화 목록
    youtube_video : null,
    // comments : []
  },

  //===========================getters==============================
  getters: {
    // 현재 modules을 사용했기 때문에 getters에서 재정의
    total_movies:(state) => state.total_movies,
    popular_movies:(state) => state.popular_movies,
    toprated_movies:(state) => state.toprated_movies,
    movie_detail:(state) => state.movie_detail,
    genre_movies:(state) => state.genre_movies,
    comments:(state) => state.comments,
  },
  
  //===========================mutations==============================
  mutations: {
    // 영화목록 전체 조회
    GET_TOTAL_MOVIES(state,movies){
      state.total_movies = movies
    },

    // 영화목록(인기) 전체 조회
    GET_POPULAR_MOVIES(state,movies){
      state.popular_movies = movies
    },

    // 영화목록(평점순) 전체 조회
    GET_TOP_RATED_MOVIES(state,movies){
      state.toprated_movies = movies
    },

    // 영화목록 세부 조회
    GET_MOVIE_DETAIL(state, movie){
      state.movie_detail = movie
    },

    // 댓글data 가져오기    
    GET_COMMENTS(state, commentfilter) {
      state.comments = commentfilter
    },

    // youtube 영화 예고편
    GET_YOUTUBE_VIDEO(state,video){
      state.youtube_video = video
    },
  },
  
  //===========================actions==============================
  actions: {
    // 영화목록 전체 조회
    getTotalMovies(context){
      axios({
        method:'get',
        url:'http://127.0.0.1:8000/movies/total_movies/',
      })
      .then(res =>
        // console.log(res.data)
        context.commit('GET_TOTAL_MOVIES',res.data)
      )
      .catch(err =>
        console.log(err)  
      )
    },

    // 영화목록(인기) 전체 조회
    getPopularMovies(context){
      axios({
        method:'get',
        url:'http://127.0.0.1:8000/movies/popular_movies/',
      })
      .then(res =>
        // console.log(res.data) 
        context.commit('GET_POPULAR_MOVIES',res.data)
      )
      .catch(err =>
        console.log(err)  
      )
    },

    // 영화목록(평점순) 전체 조회
    getTopratedMovies(context){
      axios({
        method:'get',
        url:'http://127.0.0.1:8000/movies/top_rated_movies/',
      })
      .then(res =>
        // console.log(res.data) 
        context.commit('GET_TOP_RATED_MOVIES',res.data)
      )
      .catch(err =>
        console.log(err)  
      )
    },

    // 영화목록 세부 조회
    getMovieDetail(context, movie){
      context.commit('GET_MOVIE_DETAIL', movie)
    },
    
    // 개별 영화에 댓글 생성 
    createComment(context, payload){
      const movie_id = payload.movie.movie_id
      const content = payload.content
      if (!content){
        alert('제목 입력해주세요')
        return
      }
      axios({
          method: 'post',
          url:`http://127.0.0.1:8000/movies/${movie_id}/comments/`,
          data: {content},
          headers: {
          Authorization: `Token ${context.rootState.token}`
          }
      })
      .then(() => {
          // context.commit('CREATE_COMMENT',res.data)
          // console.log(res.data)
          // context.dispatch('getComments',res.data.movie)

      })
      .catch((err) => {
          console.log(err)
      })
    },

    // 모든 댓글 가져와서 해당 개시글의 댓글로 처리
    getComments(context,movie) {

      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/movies/comments/`,
        headers: {
          Authorization: `Token ${context.rootState.token}`
        }
      })
        .then((res) => {
          const commentList = res.data
          const commentfilter = []
          // console.log(commentList)
          for (let i = 0; i < commentList.length; i++) {
            if (commentList[i].movie===movie.movie_id) {
              commentfilter.push(commentList[i])
            }
          }
          context.commit('GET_COMMENTS', commentfilter)
        })
        .catch((err) => {
        console.log(err)
      })
    },

    // youtube 영화 예고편
    getYoutubeVideo(){
      axios({
        url: YOUTUBE_URL,
        params:{
          key: YOUTUBE_API_KEY,
          part:'snippet',
          q:'반지의 제왕 예고편',
          type:'video',
        },
      })
      .then(res => {
        console.log(res)
        // context.commit('GET_YOUTUBE_VIDEO',res.data.items[0])
      })
      .catch(err =>{
        console.log(err)
      })
    },

    // 영화 세부 목록에 대한 간단리뷰 삭제
    deleteComment(context,id) {
      console.log(context)
      console.log(id)

      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/movies/${id}/comment_delete/`,
        // data : {id}
      })
      .then(()=> {
      })
      .catch(err=>console.log(err))
    }
  },
}