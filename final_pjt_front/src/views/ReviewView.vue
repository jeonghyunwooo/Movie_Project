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
  created(){
    this.getReviews()
  },
  methods:{
    toReviewCreateView() {
      this.$router.push({name:'ReviewCreateView'})
    },
    getReviews() {
      this.$store.dispatch('getReviews')
    }
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