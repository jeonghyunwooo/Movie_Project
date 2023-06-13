<template>
  <div>
    <div class="playlist_box">
      <div class="left_box">
        <div class="up_box">
          <h1 class="one">Play List</h1>
          <h1 class="two">다른 유저의</h1>
          <h1 class="three">List를 감상하고,</h1>
          <h1 class="four">자신의</h1>
          <h1 class="five">List도 공유해보세요</h1>
        </div>
        <div class="down_box">
         <img class="img" :src="img"/>
        </div>
      </div>

      <div class="right_box">
        <div class="scroll-box">
          <!-- 스크롤할 콘텐츠 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import playlistImg from "@/assets/30bb59ccd32042647e95732d33348dde.jpg";

export default {
  name: "PlayListView",
  data() {
    return {
      img: playlistImg,
    };
  },
};
</script>

<style scoped>
.playlist_box {
  display: flex;
  /* border: 1px solid white; */
  justify-content: space-around;
  color: white;
  margin-left: 5%;
  margin-bottom: 200px;
  /* text-align: left; */
  margin-right: 100px;
}

.left_box {
  display: flex;
  flex-direction: column;
  margin-top: 4%;
}
.up_box .one{
  font-family: 'Kaisei Opti', sans-serif;
  font-size: 70px;
  margin-bottom: 50px;
}
.up_box .two{
  color:grey;
  font-size: 33px
}
.up_box .three{
  color:grey;
  font-size: 33px;
  margin-bottom: 50px;
}
.up_box .four{
  color:grey;
  font-size: 33px;
}
.up_box .five{
  color:grey;
  font-size: 33px;
}

.img {
  width: 330px;
  height: 500px;
  margin-top: 20%;
  border-radius: 14px;
  filter: grayscale(100%);
}

.right_box {
  border-radius: 25px;
  overflow-y: scroll; /* 스크롤바 */
  margin-top: 50px;
  margin-left: 80px;
  background-color: rgb(204, 201, 201);
  width: 65%;
  height: 960px;
  text-align: right;
}
</style>