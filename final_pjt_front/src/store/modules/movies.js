import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'

export default{
  plugins: [createPersistedState({
    paths:[
      'comment_id',
      'comments',
      'popular_movies',
      'toprated_movies',
      '모험',
      '판타지',
      '애니메이션',
      '공포',
      '액션',
      '코미디',
      '스릴러',
      '범죄',
      '로맨스',
      'SF',
    ],
  })],

  //==========================state==============================
  state: {
    total_movies : [],
    popular_movies : [], // 영화목록(인기) 전체 data
    toprated_movies : [], // 영화목록(평점순) 전체 data
    movie_detail : '', // 영화목록 세부 data
    genre_movies : [], // 장르별 영화 목록
    youtube_video : null,

    // 영화를 장르별로 분류
    모험 : [],
    판타지 : [],
    애니메이션 : [],
    공포 : [],
    액션 : [],
    코미디 : [],
    스릴러 : [],
    범죄 : [],
    로맨스 : [],
    SF : [],
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
    genre:(state) => state.genre,

    // 영화를 장르별로 분류
    모험:(state) => state.모험,
    판타지:(state) => state.판타지,
    애니메이션:(state) => state.애니메이션,
    공포:(state) => state.공포,
    액션:(state) => state.액션,
    코미디:(state) => state.코미디,
    스릴러:(state) => state.스릴러,
    범죄:(state) => state.범죄,
    로맨스:(state) => state.로맨스,
    SF:(state) => state.SF,
  },
  
  //===========================mutations==============================
  mutations: {
    // 영화목록 전체 조회
    GET_TOTAL_MOVIES(state,movies){
      state.total_movies = movies
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
    
  
    // 장르별 영화 목록 생성
    GET_MOVIES_BY_GENRES(state, movies_by_genresList){
      state.모험 = movies_by_genresList.모험
      state.판타지 = movies_by_genresList.판타지
      state.애니메이션 = movies_by_genresList.애니메이션
      state.공포 = movies_by_genresList.공포
      state.액션 = movies_by_genresList.액션
      state.코미디 = movies_by_genresList.코미디
      state.스릴러 = movies_by_genresList.스릴러
      state.범죄 = movies_by_genresList.범죄
      state.로맨스 = movies_by_genresList.로맨스
      state.SF = movies_by_genresList.SF
    },

    // 장르별 영화 조회
    GENRE_CHOICE(state,genre){
      state.genre_movies = state[genre]
      console.log(state[genre])
    },

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

    // // 장르별 영화 조회
    // genreChoice(context, genre){
    //   const genre_movies = []
    //   const movies = this.state.movies.total_movies
    //   for(let i = 0; i < movies.length; i++){
    //     if(movies[i].genres.includes(genre)===true)
    //       genre_movies.push(movies[i])
    //   }
    //   context.commit('GENRE_CHOICE',genre_movies)

    // },

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
          url:`http://127.0.0.1:8000/movies/${movie.movie_id}/comments/`,
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

    // 모든 댓글 가져와서 해당 개시글의 댓글로 처리
    getComments(context,movie_datail) {
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

          for (let i = 0; i < commentList.length; i++) {
            if (commentList[i].movie=== movie_datail.movie_id) {
              commentfilter.push(commentList[i])
            }
          }
          context.commit('GET_COMMENTS', commentfilter)
        })
        .catch((err) => {
        console.log(err)
      })
    },

    // 장르별 영화 목록 생성
    getMoviesByGenres(context){
      const total_movies = context.getters.total_movies
      var movies_by_genresList = {
        모험 : [],
        판타지 : [],
        애니메이션 : [],
        공포 : [],
        액션 : [],
        코미디 : [],
        스릴러 : [],
        범죄 : [],
        로맨스 : [],
        SF : [],
      }

      for (let i = 0; i < total_movies.length; i++){
        if(total_movies[i]){
          var genres = total_movies[i].genres;
          var genre = genres.substr(2,genres.length-4);
          var genre_list = genre.split("', '");
          for(const genre of genre_list){
            if(movies_by_genresList[genre]){
              movies_by_genresList[genre].push(total_movies[i]);
            }
          }
        }
      }
      context.commit('GET_MOVIES_BY_GENRES',movies_by_genresList)
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
