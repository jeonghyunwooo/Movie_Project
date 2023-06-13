<template>
  <div>
    <h1>Comment</h1>
    <form @submit.prevent="createComment">
      <label for="content">댓글 :</label>
      <textarea
        name="content"
        cols="30"
        rows="1"
        v-model="content"
        @keyup.enter="createComment"
      ></textarea>
      <input type="submit" id="submit" />
    </form>
    <!-- <MovieCommentList/> -->
  </div>
</template>

<script>
// import MovieCommentList from '@/components/Movie/MovieCommentList'

export default {
  name: "MovieComment",
  components: {
    // MovieCommentList,
  },
  data() {
    return {
      content: "",
    };
  },
  // created() {
  //     this.getComments()
  // },
  computed: {
    // 영화목록 세부 data
    movie_datail() {
      return this.$store.getters.movie_detail;
    },
  },
  methods: {
    // 각 영화에 대한 댓글 작성
    createComment() {
      if (this.content) {
        const movie = this.$store.getters.movie_detail;
        const content = this.content;
        const payload = {
          movie,
          content,
        };
        this.$store.dispatch("createComment", payload);
        this.$store.dispatch("getComments", movie);
        this.content = "";
      }
    },

    // 모든 댓글 가져와서 해당 개시글의 댓글로 처리
    getComments() {
      const movie = this.$store.getters.movie_detail;
      this.$store.dispatch("getComments", movie);
    },

    deleteComment(id) {
      this.$store.commit("DELETE_COMMENT", id);
    },
  },
};
</script>

<style></style>
