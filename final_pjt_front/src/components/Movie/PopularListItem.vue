<template>
  <div>
    <!-- <a type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> -->
      <img @click="getMovieDetail" class="Popular_img" :src="poster_path" style="width: 140px; height: 190px;" alt="">
    <!-- </a> -->
  </div>
</template>

<script>
const make_img_URL = 'https://image.tmdb.org/t/p/w500'

export default {
  name: 'PopularListItem',
  props: {
    p_movie: Object,//영화목록(인기) 한개 data
  },
  data() {
    return {
      poster_path:make_img_URL + this.p_movie.poster_path,
    }
  },
  

  methods: {
    // 영화목록 세부 조회
    // 한줄평 정보 가져오기
    getMovieDetail(){
      this.$store.dispatch('getMovieDetail',this.p_movie)
      this.$store.dispatch('getComments',this.p_movie)
    }
  },
  // watch: {
  //   p_movie: {
  //     deep: true,
  //     handler(newVal) {
  //       this.poster_path = make_img_URL + newVal.poster_path
  //     }
  //   }
  // }
}
</script>

<style>
.Popular_img{
  border-radius: 7px; /* 테두리 가장자리 둥글게 */
}
</style>