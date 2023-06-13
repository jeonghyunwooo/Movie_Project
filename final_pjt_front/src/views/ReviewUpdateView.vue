<template>
  <div>
    <div class="ReviewUpdateView">
      <h1>ReviewUpdateView</h1>
  
      <form @submit.prevent='updateReview'>
        <label for="title">제목 : </label>
        <input type="text" id="title" v-model.trim="title"><br>
  
        <label for="movie">영화 : </label>
        <input type="text" id="movie" v-model.trim="movie"><br>
        
        <label for="content">리뷰 : </label>
        <textarea id="content" cols="30" rows="10" v-model='content'></textarea><br>
        <input type="submit" id="submit" value="게시하기">
      </form>
    </div>

    <div>
      <router-link :to="{name: 'ReviewView'}">Review</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name:'ReviewUpdateView',
  data() {
    return {
      title: null,
      movie: null,
      content: null,
    }
  },
  computed:{
    id(){
      return this.$route.params.id;
    }
  },
  methods:{
    updateReview() {
      const title = this.title
      const movie = this.movie
      const content = this.content
      const id = this.id

      const payload = {
        title, movie, content,id
      }
      this.$store.dispatch('updateReview',payload)
    }
  }
}
</script>

<style scoped>
.ReviewUpdateView{
  color: beige;

}
</style>