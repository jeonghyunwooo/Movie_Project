<template>
  <div>
    <!-- <a type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> -->
      <img
        @click="getMovieDetail"
        class="Popular_img"
        :src="poster_path"
        style="width: 140px; height: 190px"
      />
    <!-- </a> -->
  </div>
</template>

<script>
const make_img_URL = "https://image.tmdb.org/t/p/w500";

export default {
  name: "TopratedListItem",
  props: {
    t_movie: Object,
  },

  data() {
    return {
      poster_path: make_img_URL + this.t_movie.poster_path,
    };
  },

  methods: {
    // 영화목록 세부 조회
    getMovieDetail() {
      this.$store.dispatch("getMovieDetail", this.t_movie);
      this.$store.dispatch("getComments", this.t_movie);
    },
  },
};
</script>

<style>
.Popular_img {
  border-radius: 7px; /* 테두리 가장자리 둥글게 */
}
</style>