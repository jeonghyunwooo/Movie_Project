<template>
  <div class="genre_movie">
    <GenresListItem
      v-for="genre_movie in movies_by_genre"
      :key="genre_movie.id"
      :genre_movie="genre_movie"
    />
  </div>
</template>

<script>
import GenresListItem from "@/components/Movie/GenresListItem";
export default {
  name: "GenresList",
  components: {
    GenresListItem,
  },
  props: {
    movies_by_genre: Array,
  },
  computed: {
    genre_movies() {
      return this.$store.getters.genre_movies;
    },
  },
};
</script>

<style>
.genre_movie {
  display: flex;
  flex-wrap: wrap;
}
</style>