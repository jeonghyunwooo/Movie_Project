<template>
  <div class="choice">
    <div class="search">
    <h1 class="genre_title">장르별 영화 추천</h1>
    <input type="text" v-model="message" @keyup.enter="search_movie" placeholder="영화 제목을 입력해주세요.">
    <img class="user" @click="search_movie" src="@/assets/돋보기3.png" alt="">
    </div>
    <div class="choice_container">
      <div class="choice_box" @click="genreChoice('모험')">
        <img src="https://image.tmdb.org/t/p/w500///yI6QrilmP6AsvOLH3lQBiNFTaGk.jpg" alt="">
        Adventure
      </div>
      <div class="choice_box" @click="genreChoice('판타지')">
        <img src="https://image.tmdb.org/t/p/w500//h6BhNwNXg0IEbs2PoWfCX9QEvgl.jpg" alt="">
        Fantasy</div>
      <div class="choice_box" @click="genreChoice('애니메이션')">
        <img src="https://image.tmdb.org/t/p/w500///csiklRMzvXRLKtFcIlEDeEU7nWr.jpg" alt="">
        Animation
      </div>
      <div class="choice_box" @click="genreChoice('공포')">
        <img src="https://image.tmdb.org/t/p/w500//3Iar08BAPPflIaJvwTrOndCzk4Z.jpg" alt="">
        Horror</div>
      <div class="choice_box" @click="genreChoice('액션')">
        <img src="https://image.tmdb.org/t/p/w500//egsgKNPmMahQgNhmmYxiMVbLPrC.jpg" alt="">
        Action</div>
      <div class="choice_box" @click="genreChoice('코미디')">
        <img src="https://image.tmdb.org/t/p/w500//8lxJrcl24SWRAbLxOJNsvgFlSGa.jpg" alt="">
        Comedy</div>
      <div class="choice_box" @click="genreChoice('스릴러')">
        <img src="https://image.tmdb.org/t/p/w500//1Vd0kVGqXxghMJoUHLgXi13p3XT.jpg" alt="">
        Thriller</div>
      <div class="choice_box" @click="genreChoice('범죄')">
        <img src="https://image.tmdb.org/t/p/w500//cj9UsJEN5bNf6ZoF1BbKjKN81hc.jpg" alt="">
        Crime</div>
      <div class="choice_box" @click="genreChoice('로맨스')">
        <img src="https://image.tmdb.org/t/p/w500//132KjhVrWUqKFVfMAKKNkherytA.jpg" alt="">
        Romance</div>
      <div class="choice_box" @click="genreChoice('SF')">
        <img src="https://image.tmdb.org/t/p/w500//nWQNnOvrJJVrjLKKmmxieiivAWS.jpg" alt="">
        SF</div>
    </div>
    <h1 class="genre">{{genre}}</h1>
    <div class="genres">
      <GenresList :movies_by_genre="movies_by_genre" />
    </div>
  </div>
</template>

<script>
import GenresList from "@/components/Movie/GenresList";
import axios from "axios";
// 이미지 
// "https://image.tmdb.org/t/p/w500";

export default {
  name: "GenresChoice",
  components: {
    GenresList,
  },
  data() {
    return {
      movies_by_genre: null,
      imageURL: '/assets/2LpjWZLuNuz4xUnPluvdrS5gVQg.jpg',
      message : null,
      genre : null,
    };
  },
  
  methods: {
    // 영화 장르 하나 선택
    genreChoice(genre) {
      axios({
        method: "get",
        url: `http://127.0.0.1:8000/movies/${genre}/genres_movies/`,
      })
        .then(
          (res) => (this.movies_by_genre = res.data),
          this.genre = genre
          // console.log(res.data)
        )
        .catch((err) => console.log(err));
    },

    //영화 검색기능
    search_movie() {
      axios({
        method: "get",
        url: `http://127.0.0.1:8000/movies/${this.message}/search/`,
      })
        .then(
          (res) => (
            this.movies_by_genre = res.data,
            this.message = null
          )
        )
        .catch((err) => console.log(err));
    }
  },
};
</script>

<style scoped>
.choice {
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
}
.genre_title {
  color: white;
  text-align: left;
  font-size: 28px;
  margin: 24px;
}

.choice_container {
  display: flex;
  justify-content: space-evenly;
  margin: 40px;
}
.choice_box {
  display: flex;
  flex-direction: column;
  color: white;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
}
.choice_box:hover{
  transform: scale(1.1);
}
.genres {
  margin-bottom: 60px;
}
.choice_container img {
  width: 80px;
  height: 80px;
  border-radius: 100px;
  border: 3px solid white;

}
.search{
  display: flex;
  height: 30px;
  align-items: center;
}
.genre{
  color:white
}
</style>