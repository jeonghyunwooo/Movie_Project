import axios from 'axios'

const TMDB_API_KEY = "3e522bb11d9503474e85e9a710de1de4"
const TMDB_POPULAR_API = "https://api.themoviedb.org/3/movie/top_rated?api_key=3e522bb11d9503474e85e9a710de1de4&language=ko-kr&page=1"
const TMDB_TOP_RATED_API = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=3e522bb11d9503474e85e9a710de1de4"

// const TMDB_POPULAR_API = "https://api.themoviedb.org/3/movie/latest?api_key=3e522bb11d9503474e85e9a710de1de4&language=ko-kr"
// const API_REVIEW = "https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1"
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
        console.log(elem)
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
    getPopularMovies(context){
      for (let i=1; i<3; i++){
        axios({
          url:TMDB_TOP_RATED_API,
          method:'get',
          params:{
            api_key:TMDB_API_KEY,
            language:'ko-KR',
            page: i
          }
        })
        .then(res =>
          // console.log(res.data) 
          context.commit('GET_POPULAR_MOVIES',res.data.results)
        )
        .catch(err =>
          console.log(err)  
        )
      }
    },

    //평점 높은순 영화 목록 axios
    getTopratedMovies(context){
      for (let i=5; i<7; i++){
        axios({
          url:TMDB_POPULAR_API,
          method:'get',
          params:{
            api_key:TMDB_API_KEY,
            language:'ko-KR',
            page: i
          }
        })
        .then(res =>
          // console.log(res.data) 
          context.commit('GET_TOP_RATED_MOVIES',res.data.results)
        )
        .catch(err =>
          console.log(err)  
        )
      }
    },

    // youtube 영화 예고편 axios
    getYoutubeVideo(context){
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
        // console.log(res)
        context.commit('GET_YOUTUBE_VIDEO',res.data.items[0])
      })
      .catch(err =>{
        console.log(err)
      })
    },

  },
}
