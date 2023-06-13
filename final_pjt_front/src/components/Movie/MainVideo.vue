<template>
  <div class="main_home">
      <video class="main_video fade-in-video" :src="main_video_URL" type="video/mp4" autoplay muted loop></video>
      <div class="main_words">
        <h1 class= "fade-in-word">The Movie Choice</h1><br>
        <h4 class= "fade-in-word">나만의 영화관을 만들어 보세요</h4>
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

<style scoped>
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
  opacity: 0.4;
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

/* ================================================== */
/* 글씨 천천히 나타나게 하기 */
.fade-in-word {
  opacity: 0; /* 초기에 투명도를 0으로 설정 */
  animation-name: fade-in-word; /* 애니메이션 이름 설정 */
  animation-duration: 0.5s; /* 애니메이션 지속 시간 설정 */
  animation-fill-mode: forwards; /* 애니메이션이 끝난 후 상태를 유지 */
}

@keyframes fade-in-word {
  from {
    opacity: 0; /* 애니메이션 시작 시 투명도 0 */
  }
  to {
    opacity: 1; /* 애니메이션 종료 시 투명도 1 */
  }
}

/* ================================================== */
/* 동영상 천천히 나타나게 하기 */
.fade-in-video {
  opacity: 0; /* 초기에 투명도를 0으로 설정 */
  animation-name: fade-in-video; /* 애니메이션 이름 설정 */
  animation-duration: 5s; /* 애니메이션 지속 시간 설정 */
  animation-fill-mode: forwards; /* 애니메이션이 끝난 후 상태를 유지 */
}

@keyframes fade-in-video {
  from {
    opacity: 0; /* 애니메이션 시작 시 투명도 0 */
  }
  to {
    opacity: 1; /* 애니메이션 종료 시 투명도 1 */
  }
}

</style>