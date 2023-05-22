<template>
  <div>
    <span>{{genre_movie.title}}</span>
  </div>
</template>

<script>
export default {
  name: 'GenresListItem',
  props:{
    genre_movie:Object
  }
}
</script>

<style>

</style>