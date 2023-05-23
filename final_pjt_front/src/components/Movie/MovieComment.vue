<template>
  <div>
    <h1>MovieComment</h1>
      <form @submit.prevent="createComment">
      <label for="content">댓글 :</label>
    <textarea name="content" cols="30" rows="1" v-model="content"></textarea>
    <input type="submit" id="submit">
    </form>
    <MovieCommentList/>
  </div>
</template>

<script>
import MovieCommentList from '@/components/Movie/MovieCommentList'

export default {
    name:"MovieComment",
    components : {
        MovieCommentList,
    },
    data(){
        return{
            content: ''
        }
    },
    methods:{
        // 각 영화에 대한 댓글 작성
        createComment(){
            const movie = this.$store.getters.movie_detail
            const content = this.content

            const payload = {
                movie, content,
            }
            this.$store.dispatch('createComment',payload) 
        },

        deleteComment(id){
            this.$store.commit('DELETE_COMMENT', id)
        }
    },
}
</script>

<style>

</style>