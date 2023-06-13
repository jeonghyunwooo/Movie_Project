<template>
  <div class="Review">
    <h1>ReviewCreate</h1>
    <form @submit.prevent='createReview'>
      <label for="title">제목 : </label>
      <input type="text" id="title" v-model.trim="title"><br>

      <label for="movie">영화 : </label>
      <input type="text" id="movie" v-model.trim="movie"><br>
      
      <label for="content">리뷰 : </label>
      <textarea id="content" cols="30" rows="10" v-model='content'></textarea><br>
      <input type="submit" id="submit" value="게시하기">
    </form>

    <div>
      <router-link :to="{name: 'ReviewView'}">Review</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCreateView',
  data() {
    return {
      title: null,
      movie: null,
      content: null,
    }
  },
  methods:{
    createReview() {
      const title = this.title
      const movie = this.movie
      const content = this.content
      
      const payload = {
        title, movie, content
      }
      this.$store.dispatch('createReview',payload)
    }
  }
}
</script>

<style>
.Review{
  color: beige;
}
</style>