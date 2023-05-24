<template>
  <div>
    <div class="box">
      <div class="left_box align-baseline">
        <div class="text">
          <h1 style="color: white; font-size: 300%; margin-bottom: 30px">
            PlayList
          </h1>
          <h1>다른 유저의</h1>
          <h1>List를 감상하고</h1>
          <h1>자신의</h1>
          <h1>List도 공유해보세요</h1>
        </div>

        <img class="img" :src="img" />
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

<style>
.box {
  display: flex;
  /* border: 1px solid white; */
  color: white;
  margin-left: 5%;
  margin-bottom: 200px;
  /* text-align: left; */
  margin-right: 100px;
}

.text {
  text-align: left;
}

.img {
  width: 330px;
  margin-top: 33%;
}

.left_box {
  display: flex;
  flex-direction: column;
  margin-top: 4%;
}

.right_box {
  border-radius: 25px;
  overflow-y: scroll; /* 스크롤바 */
  margin: auto;
  background-color: rgb(204, 201, 201);
  width: 65%;
  height: 1000px;
  text-align: right;
}
</style>