<template>
  <div class ="text" style="text-align : left">
    <h2>Title: {{review.title}}</h2>
    <h4>Movie: {{review.movie}}</h4>
    <div>
      <!-- <p>작성자 : {{review.username}}</p> -->
      <router-link :to="{
        name: 'ReviewDetail',
        params: {id: review.id }}">
        <h5>작성자 : {{review.username}}</h5>
      </router-link>
      <!--  -->
      <input type="button" value="삭제" @click="deleteReview(review.id)" class="btn">
    </div>
    <hr>
  </div>
</template>

<script >
import axios from 'axios'

export default {
  name:'ReviewListItem',
  props:{
    review: Object
  },
  methods:{
    deleteReview(id) {
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/communitys/reviews/${id}/`,
        data : {id}
      })
      .then(()=> {
        location.reload();
      })
      .catch(err=>console.log(err))
    }
  }
}
</script>

<style scoped>
.text{
  color: beige(38, 44, 73);
}
.btn{
  margin-left: 90%;
}
</style>