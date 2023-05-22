<template>
  <div class="home">
    <div><MainVideo/></div>
    <GenresChoice/>
    <div class="Popular_list"><PopularList/></div>
    <div class="Popular_list"><TopratedList/></div> 
    <MovieDetail/>      
  </div>      
</template>

<script>
import MainVideo from '@/components/Movie/MainVideo'
import PopularList from '@/components/Movie/PopularList'
import TopratedList from '@/components/Movie/TopratedList'
import MovieDetail from '@/components/Movie/MovieDetail'
import GenresChoice from '@/components/Movie/GenresChoice'

export default {
  name: 'HomeView',
  components: {
    MainVideo,
    PopularList,
    TopratedList,
    MovieDetail,
    GenresChoice,
  },

  created() {
    // this.getMainVideo()
    this.getTotalMovies() // 영화목록 전체 data 생성
    this.getPopularMovies() // 영화목록(인기) 전체 data생성
    this.getTopratedMovies() // 영화목록(평전순) 전체 data생성
  },

  // store의 getters에서 재정의한 변수를 가져온다.
  computed : {
  },
  
  methods:{
    // 영화목록(인기) 전체 조회
    getTotalMovies() {
      this.$store.dispatch('getTotalMovies')
    },
    // 영화목록(인기) 전체 조회
    getPopularMovies() {
      this.$store.dispatch('getPopularMovies')
    },
    // 영화목록(평점순) 전체 조회
    getTopratedMovies() {
      this.$store.dispatch('getTopratedMovies')
    },

    // mainVideo는 유튜브 영상 예고편
    // getMainVideo() {
      // this.$store.dispatch('getMainVideo')
    // },
  }
}
</script>

<style>
.Popular_list{
  margin-left: 4%;
  margin-right: 4%;
  margin-bottom: 0px;
}
</style>