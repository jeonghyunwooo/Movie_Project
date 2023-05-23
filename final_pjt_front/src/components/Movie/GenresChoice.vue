<template>
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
    <GenresList/>
  </div>
</template>

<script>
import GenresList from '@/components/Movie/GenresList'

export default {
  name: 'GenresChoice',
  components:{
    GenresList,
  },
  
  methods:{
    // 영화 장르 하나 선택
    genreChoice(genre){
      this.$store.commit('GENRE_CHOICE',genre)
    }
  }
}
</script>

<style>
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