import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'

export default{
  plugins: [createPersistedState({
    paths:['comment_id','comments'],
  })],

  state: {
    popular_movies : [],
    toprated_movies : [],
    youtube_video : null,
    
    // Test용 변수들 
    comment_id:1,
    comments : []
  },
  getters: {
    popular_movies:(state) => state.popular_movies,
    toprated_movies:(state) => state.toprated_movies,
    comments:(state) => state.comments
  },
  
  mutations: {
    // 인기영화
    GET_POPULAR_MOVIES(state,movies){
      movies.forEach(elem => {
        state.popular_movies.push(elem)
      })
    },
    // 평점 높은 영화
    GET_TOP_RATED_MOVIES(state,movies){
      movies.forEach(elem => {
        state.toprated_movies.push(elem)
      })
    },
    // youtube 영화 예고편
    GET_YOUTUBE_VIDEO(state,video){
      state.youtube_video = video
    },

    CREATE_COMMENT(state,comment){
      const createdAt = new Date(comment.createdAt);
      comment.createdAt = createdAt.toLocaleString();
      state.comments.push(comment)
      state.comment_id = state.comment_id + 1
    },

    DELETE_COMMENT(state, id){
      state.comments = state.comments.filter((comment)=>{
        // return !(comment.id===id)
        return comment.id !== id;
      })
    }
  },
  actions: {

    //인기 영화 목록 axios(Ver.django)
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
    //평점 높은순 영화 목록 axios
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

    // youtube 영화 예고편 axios
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
    createComment(context,payload){
      const comment = {
        id:context.state.comment_id,
        content : payload.content,
        createdAt: new Date().getTime(),
      }
      context.commit('CREATE_COMMENT', comment) 
    },
    deleteComment(context, id) {
      context.commit('DELETE_COMMENT', id);
    }
  },
}
