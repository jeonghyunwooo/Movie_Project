<template>
  <div>
    <a type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      <img @click="TopratedListItemToTopratedList" class="Popular_img" :src="poster_path" style="width: 140px; height: 190px;">
    </a>
  </div>
</template>

<script>
const make_img_URL = 'https://image.tmdb.org/t/p/w500'

export default {
  name:"TopratedListItem",
  data() {
    return {
      poster_path:make_img_URL + this.t_movie.poster_path,
    }
  },
  methods:{
    TopratedListItemToTopratedList(){
      this.$emit("TopratedListItem_TopratedList",this.t_movie)
    }
  },
  props:{
    t_movie: Object
  },
}
</script>

<style>
.Popular_img{
  border-radius: 7px; /* 테두리 가장자리 둥글게 */
}
</style>