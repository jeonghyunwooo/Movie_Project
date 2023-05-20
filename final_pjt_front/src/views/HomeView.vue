<template>
  <div class="home">
    <div><MainVideo/></div>
    <hr>
    <div class="Popular_list"><PopularList @PopualrList-HomeView="arriveHomeView"/></div>
    <div class="Popular_list"><TopratedList @TopratedList-HomeView="arriveHomeView_t"/></div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-dialog modal-dialog-scrollable">
              {{getPopularMovieDetail}}
              {{getTopratedMovieDetail}}
            </div>
              <MovieComments/>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainVideo from '@/components/Movie/MainVideo'
import PopularList from '@/components/Movie/PopularList'
import TopratedList from '@/components/Movie/TopratedList'
import MovieComments from '@/components/Movie/MovieComments'

export default {
  name: 'HomeView',
  components: {
    MainVideo,
    PopularList,
    TopratedList,
    MovieComments,
  },
  data: function(){
    return{
      getPopularMovieDetail : '',
      getTopratedMovieDetail:'',
    }
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
    arriveHomeView(input) {
      this.getPopularMovieDetail = input
      this.getTopratedMovieDetail = ''
    },
    arriveHomeView_t(input) {
      this.getTopratedMovieDetail = input
      this.getPopularMovieDetail = ''

    }
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