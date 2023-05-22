<template>
  <div>
    <GenresListItem 
    v-for="genre_movie in genre_movies"
    :key = "genre_movie.id"
    :genre_movie="genre_movie"
    />
  </div>
</template>

<script>
import GenresListItem from '@/components/Movie/GenresListItem'
export default {
  name: 'GenresList',
  components:{
    GenresListItem,
  },
  computed:{
    genre_movies() {
      return this.$store.getters.genre_movies
    }
  },
}
</script>

<style>

</style>