<template>
  <div class="container">
    <div class="box_detail">
      <h1 class="detail">{{ review?.title }}</h1>
      <h3>작성자 : {{ review?.username }}</h3>
      <p>내용 : {{ review?.content }}</p>
      <p>작성시간 : {{ review?.created_at }}</p>
      <p>수정시간 : {{ review?.updated_at }}</p>
      <br><br>
    
      <router-link :to="{name: 'ReviewUpdateView', params: { id: review?.id }}">수정</router-link>
      <router-link :to="{name: 'ReviewView', params: { id: review?.id }}">Review</router-link>
    
    </div>
  </div>
</template>

<script>
import axios from "axios";
const API_URL = "http://127.0.0.1:8000";

export default {
  name: "ReviewDetail",
  components:{
  },
  data() {
    return {
      review: null,
    };
  },
  created() {
    this.getReviewDetail();
  },
  methods: {
    getReviewDetail() {
      axios({
        method: "get",
        url: `${API_URL}/communitys/reviews/${this.$route.params.id}/`,
      })
        .then((res) => {
          this.review = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.container {
  width: 800px ;
  margin-top: 15%;
  color: beige;
  font-size: 22px;
  /* text-align: left;
  margin-left: 10%; */
  margin-top: 200px;
}
.box_detail{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>