<template>
  <div class="Review">
    <h2>Review</h2>
    <button @click="toReviewCreateView">[CREATE]</button>
    <div>
      <ReviewList/>
    </div>
  </div>
</template>

<script>
import ReviewList from '@/components/Community/ReviewList'

export default {
  name:'ReviewView',
  components:{
    ReviewList
  },
  // computed:{
  //   isLogin() {
  //     return this.$store.getters.isLogin // 로그인 여부
  //   }
  // },
  created(){
    this.getReviews()
  },
  methods:{
    // 리뷰 정보 가져오기
    getReviews(){
      this.$store.dispatch('getReviews')
      // if (this.isLogin) {
      //   this.$store.dispatch('getReviews')
      // }
      // else {
      //   alert('로그인이 필요한 페이지입니다...')
      //   this.$router.push({ name: 'LoginView' })
      // }
    },

    // 리뷰 작성
    toReviewCreateView() {
      this.$router.push({name:'ReviewCreateView'})
    },
  }
}
</script>

<style>
.Review{
  margin: auto;
  margin-top:15%;
  background-color: slategrey;
  width: 600px;
}

</style>