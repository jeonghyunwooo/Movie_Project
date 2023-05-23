<template>
  <div>
    <h5>{{comment.content}}</h5>
  </div>
</template>

<script>
export default {
  name: 'MovieCommentListItem',
  props:{
    comment: Object,
  }
}
</script>

<style>

</style>