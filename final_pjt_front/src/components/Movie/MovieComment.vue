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
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

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
            const content = this.content
            const movie = this.$store.getters.movie_detail
            console.log(movie.id)
            if (!content){
                alert('제목 입력해주세요')
                return
            }
            axios({
                method: 'post',
                url:`${API_URL}/movies/${movie.id}/comments/`,
                data: {content},
                headers: {
            Authorization: `Token ${this.$store.state.token}`
        }
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        },
        deleteComment(id){
            this.$store.commit('DELETE_COMMENT', id)
        }
    },
}
</script>

<style>

</style>