import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'

export default{
  plugins: [createPersistedState({
    paths:['comment_id','comments'],
  })],

  //==========================state==============================
  state: {
    total_moives : [],
    popular_movies : [], // 영화목록(인기) 전체 data
    toprated_movies : [], // 영화목록(평점순) 전체 data
    movie_detail : '', // 영화목록 세부 data
    genre_movies : [], // 장르별 영화 목록
    youtube_video : null,
    // Test용 변수들 
    comment_id:1,
    comments : []
  },

  //===========================getters==============================
  getters: {
    // 현재 modules을 사용했기 때문에 getters에서 재정의
    total_moives:(state) => state.total_moives,
    popular_movies:(state) => state.popular_movies,
    toprated_movies:(state) => state.toprated_movies,
    movie_detail:(state) => state.movie_detail,
    genre_movies:(state) => state.genre_movies,
    comments:(state) => state.comments
  },
  
  //===========================mutations==============================
  mutations: {
    // 영화목록 전체 조회
    GET_TOTAL_MOVIES(state,movies){
      state.total_moives = movies
    },

    // 영화목록(인기) 전체 조회
    GET_POPULAR_MOVIES(state,movies){
      movies.forEach(elem => {
        state.popular_movies.push(elem)
      })
    },

    // 영화목록(평점순) 전체 조회
    GET_TOP_RATED_MOVIES(state,movies){
      movies.forEach(elem => {
        state.toprated_movies.push(elem)
      })
    },

    // 영화목록 세부 조회
    GET_MOVIE_DETAIL(state, movie){
      state.movie_detail = movie
    },

    // 장르별 영화 조회
    GENRE_CHOICE(state,genre_movies){
      state.genre_movies=genre_movies
    },

    // 영화 세부 목록에 대한 간단리뷰 생성
    CREATE_COMMENT(state,comment){
      const createdAt = new Date(comment.createdAt);
      comment.createdAt = createdAt.toLocaleString();
      state.comments.push(comment)
      state.comment_id = state.comment_id + 1
    },

    // 영화 세부 목록에 대한 간단리뷰 삭제
    DELETE_COMMENT(state, id){
      state.comments = state.comments.filter((comment)=>{
        // return !(comment.id===id)
        return comment.id !== id;
      })
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
        url:'http://127.0.0.1:8000/movies/total_movies/',
        method:'get',
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
        url:'http://127.0.0.1:8000/movies/popular_movies/',
        method:'get',
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
        url:'http://127.0.0.1:8000/movies/top_rated_movies/',
        method:'get',
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

    // 장르별 영화 조회
    genreChoice(context, genre){
      const genre_movies = []
      const movies = this.state.movies.total_moives
      for(let i = 0; i < movies.length; i++){
        if(movies[i].genres.includes(genre)===true)
          genre_movies.push(movies[i])
      }
      context.commit('GENRE_CHOICE',genre_movies)
    },

    // 개별 영화에 댓글 생성
    createComment(context, payload){
      const movie = payload.movie
      const content = payload.content

      if (!content){
        alert('제목 입력해주세요')
        return
      }
      axios({
          method: 'post',
          url:`http://127.0.0.1:8000/movies/${movie.id}/comments/`,
          data: {content},
          headers: {
          Authorization: `Token ${context.rootState.token}`
          }
      })
      .then((res) => {
          console.log(res)
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
    deleteComment(context, id) {
      context.commit('DELETE_COMMENT', id);
    }
  },
}
