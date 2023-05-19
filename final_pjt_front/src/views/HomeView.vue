<template>
  <div class="home">
    <div><MainVideo/></div>
    <hr>
    <div class="Popular_list"><PopularList/></div>
    <div class="Popular_list"><TopratedList/></div>
  </div>
</template>

<script>
import MainVideo from '@/components/Movie/MainVideo'
import PopularList from '@/components/Movie/PopularList'
import TopratedList from '@/components/Movie/TopratedList'

export default {
  name: 'HomeView',
  components: {
    MainVideo,
    PopularList,
    TopratedList,
  },
  created() {
    // this.getMainVideo()
    this.getPopularMovies()
    this.getTopratedMovies()
  },
  
  methods:{
    // mainVideo는 유튜브 영상 예고편
    // getMainVideo() {
      // this.$store.dispatch('getMainVideo')
    // },
    getPopularMovies() {
      this.$store.dispatch('getPopularMovies')
    },
    getTopratedMovies() {
      this.$store.dispatch('getTopratedMovies')
    },
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