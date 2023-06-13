<template>
  <div>
    <div class="playlist_box">
      <div class="left_box">
        <div class="up_box">
          <h1 class="one">Review</h1>
          <h1 class="two">영화를 보며</h1>
          <h1 class="three">느낀 감정을 리뷰하고</h1>
          <h1 class="four">다른 유저와</h1>
          <h1 class="five">소통해 보세요.</h1>
        </div>
        <div class="down_box">
          <img class="img" :src="img" />
        </div>
      </div>

      <!-- 리뷰 보여지는 부분 -->
      <div class="Review">
        <div class="title">
          <h2>Review</h2>
          <!-- <button @click="toReviewCreateView">[CREATE]</button> -->
          <router-link :to="{name: 'ReviewCreateView'}">
            <h6 style="color: bisque;">
              글 작성
            </h6> 
          </router-link>
        </div>

          <div>
          <ReviewList/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ReviewList from '@/components/Community/ReviewList'
import Reviewimg from "@/assets/0fed207c35d077abcdd0478e060a0e96.jpg";

export default {
  name:'ReviewView',
  components:{
    ReviewList
  },
  data() {
    return {
      img: Reviewimg,
    };
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부
    }
  },
  created(){
    this.getReviews()
  },
  methods:{
    // 리뷰 정보 가져오기
    getReviews(){
      if (this.isLogin) {
        this.$store.dispatch('getReviews')
      }
      else {
        alert('로그인이 필요한 페이지입니다...')
        this.$router.push({ name: 'LoginView' })
      }
    },
     // 리뷰 작성
    toReviewCreateView() {
      this.$router.push({name:'ReviewCreateView'})
    },
  }
}
</script>

<style scoped>
.Review{
  margin: auto;
  margin-top:4%;
  /* margin-right: 6%; */
  background-color: rgb(122, 121, 121);
  width: 60%;
  float: right;
  border-radius: 10px;
}
.title{
  margin-top: 3%;
}
.playlist_box {
  display: flex;
  /* border: 1px solid white; */
  justify-content: space-around;
  color: white;
  margin-left: 5%;
  margin-bottom: 200px;
  /* text-align: left; */
  margin-right: 100px;
}

.left_box {
  display: flex;
  flex-direction: column;
  margin-top: 4%;
}
.up_box .one{
  font-family: 'Kaisei Opti', sans-serif;
  font-size: 70px;
  margin-bottom: 50px;
}
.up_box .two{
  color:grey;
  font-size: 33px
}
.up_box .three{
  color:grey;
  font-size: 33px;
  margin-bottom: 50px;
}
.up_box .four{
  color:grey;
  font-size: 33px;
}
.up_box .five{
  color:grey;
  font-size: 33px;
}

.img {
  width: 330px;
  height: 500px;
  margin-top: 20%;
  border-radius: 14px;
  filter: grayscale(100%);
}

.right_box {
  border-radius: 25px;
  overflow-y: scroll; /* 스크롤바 */
  margin-left: 85px;
  background-color: rgb(204, 201, 201);
  width: 80%;
  height: 960px;
  text-align: right;
}
</style>