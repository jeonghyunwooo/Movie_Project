<template>
  <div class="genre_movies">
    <a type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      <img
        @click="getMovieDetail"
        class="Popular_img"
        :src="'https://image.tmdb.org/t/p/w500' + genre_movie.poster_path"
        style="width: 140px; height: 190px"
        alt=""
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "GenresListItem",
  props: {
    genre_movie: Object,
  },
  methods: {
    // 영화목록 세부 조회
    // 한줄평 정보 가져오기
    getMovieDetail() {
      this.$store.dispatch("getMovieDetail", this.genre_movie);
      this.$store.dispatch("getComments", this.genre_movie);
    },
  },
  // watch: {
  //   p_movie: {
  //     deep: true,
  //     handler(newVal) {
  //       this.poster_path = make_img_URL + newVal.poster_path
  //     }
  //   }
  // }
};
</script>

<style scoped>
.Popular_img {
  border-radius: 7px; /* 테두리 가장자리 둥글게 */
  margin: 5px;
  margin-top: 20px;
}
</style>