<template>
  <div>
    <h1>MovieComments</h1>
    <form @submit.prevent="createComment">
        <label for="content">댓글 :</label>
        <textarea name="content" cols="30" rows="1" v-model="content"></textarea>
        <input type="submit" id="submit">
    </form>
    <p v-for="comment in comments" :key="comment.id">
        <span>
            {{comment.id}}
            {{comment.content}}
            {{comment.createdAt}}
        </span>
        <button @click="deleteComment(comment.id)">삭제</button>
    </p>
  </div>
</template>

<script>

export default {
    name:"MovieComments",
    data(){
        return{
            content:''
        }
    },
    methods:{
        createComment(){
            const content = this.content

            if (!content){
                alert('댓글을 입력하세요')
                return
            }
            const payload = {
                content
            }
            this.$store.dispatch('createComment',payload)
            this.content=""
        },
        deleteComment(id){
            this.$store.commit('DELETE_COMMENT', id)
        }
    },
    computed:{
        comments(){
            return this.$store.getters.comments
        }
    }
}
</script>

<style>

</style>