<template>
  <div class="scroll-wrapper">
    
    <!-- 리뷰 작성 게시판 -->
    <div class="box3">
      <ReviewListItem
      v-for="review in reviews"
      :key="review.id" 
      :review="review"
      />
    </div>
    <!--  -->
    
  </div>
</template>

<script>
import ReviewListItem from '@/components/Community/ReviewListItem'
export default {
  name : "ReviewList",
  components : {
    ReviewListItem,
  },
  computed: {
    reviews() {
      return this.$store.getters.reviews
    }
  }
}
</script>

<style scoped>
/* .box4{
  text-align: left;
} */
.box3{
  margin-left: 5%;
  margin-top: 8%;
}
.scroll-wrapper {
  overflow-y: auto;
  max-height: 840px; /* 스크롤이 보이는 최대 높이를 지정하세요 */
}
</style>