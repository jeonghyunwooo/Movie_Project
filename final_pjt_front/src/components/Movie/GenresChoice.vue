<template>
  <div class="choice">
    <div class="choice_container">
      <div class='choice_box' @click="genreChoice('모험')">모험</div>
      <div class='choice_box' @click="genreChoice('판타지')">판타지</div>
      <div class='choice_box' @click="genreChoice('애니메이션')">애니메니션</div>
      <div class='choice_box' @click="genreChoice('공포')">공포</div>
      <div class='choice_box' @click="genreChoice('액션')">액션</div>
      <div class='choice_box' @click="genreChoice('코미디')">코미디</div>
      <div class='choice_box' @click="genreChoice('스릴러')">스릴러</div>
      <div class='choice_box' @click="genreChoice('범죄')">범죄</div>
      <div class='choice_box' @click="genreChoice('로맨스')">로맨스</div>
      <div class='choice_box' @click="genreChoice('SF')">SF</div>
    </div>
    <div>
      <GenresList :movies_by_genre="movies_by_genre"/>
    </div>
  </div>
</template>

<script>
import GenresList from '@/components/Movie/GenresList'
import axios from 'axios'

export default {
  name: 'GenresChoice',
  components:{
    GenresList,
  },
  data (){
    return {
      movies_by_genre : null,
    }
  },

  methods:{
    // 영화 장르 하나 선택
    genreChoice(genre){
      axios({
        method:'get',
        url:`http://127.0.0.1:8000/movies/${genre}/genres_movies/`,
      })
      .then(res =>
        this.movies_by_genre = res.data
        // console.log(res.data)
      )
      .catch(err =>
        console.log(err)  
      )
    }
  }
}
</script>

<style>
.choice{
  display: flex;
  flex-direction: column;
}

.choice_container{
  display: flex;
  justify-content: space-evenly;
  margin: 40px;
}
.choice_box{
  display: flex;
  border: 1px solid white;
  color: white;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  
}

</style>