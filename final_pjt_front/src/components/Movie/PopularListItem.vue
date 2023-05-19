<template>
  <div>
    <img class="Popular_img" :src="poster_path" style="width: 140px; height: 190px;" alt="">
  </div>
</template>

<script>
const make_img_URL = 'https://image.tmdb.org/t/p/w500'

export default {
  name: 'PopularListItem',
  data() {
    return {
      poster_path:make_img_URL + this.p_movie.poster_path,
    }
  },
  props: {
    p_movie: Object
  },
  watch: {
    p_movie: {
      deep: true,
      handler(newVal) {
        console.log(newVal)
        this.poster_path = make_img_URL + newVal.poster_path
      }
    }
  }
}
</script>

<style>
.Popular_img{
  border-radius: 7px; /* 테두리 가장자리 둥글게 */
}
</style>