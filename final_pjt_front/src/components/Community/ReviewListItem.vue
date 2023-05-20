<template>
  <div style="text-align : left">
    <h2>제목 : {{review.title}}</h2>
    <h3>영화 : {{review.movie}}</h3>
    <p>내용 : {{review.content}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name:'ReviewListItem',
  props:{
    review: Object
  }
}
</script>

<style>

</style>