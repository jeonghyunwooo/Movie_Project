<template>
  <div style="text-align : left">
    <h2>제목 : {{review.title}}</h2>
    <h3>영화 : {{review.movie}}</h3>
    <p>내용 : {{review.id}}</p>
    <p>작성자 : {{review.username}}</p>
    <router-link :to="{
      name: 'ReviewDetail',
      params: {id: review.id }}">
      상세페이지
    </router-link>
    <hr>
  </div>
</template>

<script>
export default {
  name:'ReviewListItem',
  props:{
    review: Object
  },
  methods:{
  }
}
</script>

<style>

</style>