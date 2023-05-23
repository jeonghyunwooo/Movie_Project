<template>
  <div>
    <h3>댓글목록</h3>
    <MovieCommentListItem
    v-for="comment in comments" :key="comment.id"
    :comment="comment"
    />
  </div>
</template>

<script>
import MovieCommentListItem from '@/components/Movie/MovieCommentListItem'

export default {
  name : 'MovieCommentList',
  components: {
    MovieCommentListItem
  },
  computed: {
    comments() {
      return this.$store.getters.comments
    },
  },
}
</script>

<style>

</style>