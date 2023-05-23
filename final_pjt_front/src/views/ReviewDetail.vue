<template>
    <div>
        <h1 class="detail">detail</h1>
        <p>글 번호 : {{ review?.id }}</p>
        <p>작성자 : {{ review?.username }}</p>
        <p>제목 : {{ review?.title }}</p>
        <p>내용 : {{ review?.content }}</p>
        <p>작성시간 : {{ review?.created_at }}</p>
        <p>수정시간 : {{ review?.updated_at }}</p> 
    </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
    name:'ReviewDetail',
    data(){
        return{
            review: null
        }
    },
    created(){
        this.getReviewDetail()
    },
    methods:{
        getReviewDetail(){
            axios({
                method:'get',
                url:`${API_URL}/communitys/reviews/${this.$route.params.id}/`,
            })
            .then((res)=>{
                this.review = res.data
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
}
</script>

<style>
.detail{
    margin-top: 15%;
}
</style>