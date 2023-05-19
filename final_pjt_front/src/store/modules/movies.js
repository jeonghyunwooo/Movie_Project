import axios from 'axios'


const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'

export default{
  state: {
    popular_movies : [],
    toprated_movies : [],
    youtube_video : null,
  },
  getters: {
    popular_movies:(state) => state.popular_movies,
    toprated_movies:(state) => state.toprated_movies
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
  },
  actions: {
    //인기 영화 목록 axios
    // getPopularMovies(context){
    //   for (let i=1; i<3; i++){
    //     axios({
    //       url:TMDB_TOP_RATED_API,
    //       method:'get',
    //       params:{
    //         api_key:TMDB_API_KEY,
    //         language:'ko-KR',
    //         page: i
    //       }
    //     })
    //     .then(res =>
    //       // console.log(res.data) 
    //       context.commit('GET_POPULAR_MOVIES',res.data.results)
    //     )
    //     .catch(err =>
    //       console.log(err)  
    //     )
    //   }
    // },
    
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

  },
}
