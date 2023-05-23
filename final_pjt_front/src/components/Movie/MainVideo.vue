<template>
  <div class="main_home">
      <video class="main_video" :src="main_video_URL" type="video/mp4" autoplay muted loop></video>
      <div class="main_words">
        <h1>The Movie Choice</h1><br>
        <h4>나만의 영화관을 만들어 보세요</h4>
      </div>
  </div>
</template>

<script>
// require 자료 요청
const main_video_URL = require('@/assets/202305231038.mp4');

export default {
  name: 'MainVideo',
  data() {
    return {
      main_video_URL
    }
  }
}
</script>

<style>
.main_home{
  position : relative;
  overflow: hidden;
  height: 100%;
}
.main_video{
  opacity : 0.5;
  width: 100%;
  left : 0px;
  top : 0px;
}
.main_words{
  color: white;
  position: absolute;
  top : 45%;
  left : 17%;
}
/* ================================================== */
/* 화면 크기에 따른 글씨 크기 반응형으로 줄어들기 */
@media (max-width: 2000px) {
  .main_words h1 {
    font-size: 100px;
  }
}
@media (max-width: 1500px) {
  .main_words h1 {
    font-size: 80px;
  }
}
@media (max-width: 1200px) {
  .main_words h1 {
    font-size: 60px;
  }
}
</style>