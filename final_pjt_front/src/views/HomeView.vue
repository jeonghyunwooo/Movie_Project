<template>
  <div class="home">
    <div class="MainVideo"><MainVideo /></div>
    <div class="film" data-aos="fade-left">
      <h2><b>Go to Movie PlayList</b></h2>
      <h5><b>Click!</b></h5>
      <router-link :to="{ name: 'PlayListView' }">
        <img src="../assets/moviefilm.png" alt="" />
      </router-link>
      <p>다른 유저들의 특색있는 PlayList를 감상해보세요</p>
    </div>
    <div class="home_main">
      <div class="Popular_list"><PopularList /></div>
      <div class="Popular_list"><TopratedList /></div>
      <GenresChoice />
      <MovieDetail />
    </div>
  </div>
</template>

<script>
import MainVideo from "@/components/Movie/MainVideo";
import PopularList from "@/components/Movie/PopularList";
import TopratedList from "@/components/Movie/TopratedList";
import MovieDetail from "@/components/Movie/MovieDetail";
import GenresChoice from "@/components/Movie/GenresChoice";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    MainVideo,
    PopularList,
    TopratedList,
    MovieDetail,
    GenresChoice,
  },

  data() {
    return {
      totalMovies_AtHome: null,
    };
  },

  created() {
    this.getTotalMovies(); // 영화목록 전체 data 생성
    this.getPopularMovies(); // 영화목록(인기) 전체 data생성
    this.getTopratedMovies(); // 영화목록(평전순) 전체 data생성
  },

  // store의 getters에서 재정의한 변수를 가져온다.
  computed: {},

  methods: {
    // 영화목록(인기) 전체 조회
    getTotalMovies() {
      this.$store.dispatch("getTotalMovies");
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/movies/total_movies/",
      })
        .then((res) => (this.totalMovies_AtHome = res.data))
        .catch((err) => console.log(err));
    },
    // 영화목록(인기) 전체 조회
    getPopularMovies() {
      this.$store.dispatch("getPopularMovies");
    },
    // 영화목록(평점순) 전체 조회
    getTopratedMovies() {
      this.$store.dispatch("getTopratedMovies");
    },

    // mainVideo는 유튜브 영상 예고편
    // getMainVideo() {
    // this.$store.dispatch('getMainVideo')
    // },
  },
};
</script>

<style>
.Popular_list {
  margin-left: 4%;
  margin-right: 4%;
  margin-bottom: 0px;
  height: 300px;
} 

.film {
  /* position: absolute; */
  border: 1px solid white;
  border-radius: 40px;
  background-color: white;
  margin: auto;
  width: 600px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  height: 250px;
}

.film a {
  text-decoration: none;
}

.film img {
  width: 220px;
  height: 110px;
}

.film h2 {
  font-family: "Kaisei Opti", sans-serif;
  margin-top: 15px;
}

.film h5 {
  font-family: "Roboto", sans-serif;
}

.film p {
  font-family: "Roboto", sans-serif;
  margin-top: 6px;
  color: grey;
  
}
.home_main {
  display: flex;
  flex-direction: column;
}

.box{
  margin-bottom: 0px;
}

</style>