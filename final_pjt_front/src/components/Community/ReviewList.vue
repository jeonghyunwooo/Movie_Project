<template>
  <div>
    <p>ReviewList</p>
    <ReviewListItem
    v-for="review in reviews"
    :key="review.id" 
    :review="review"
    />
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

<style>

</style>