<template>
  <div>
    <!-- header -->
    <h1 id="playlist_mement"><b>새로운 영화를 찾고있다면,</b></h1>
    <div class="community_logo">
      <!-- 플레이 리스트 -->
      <div class="logo_box">
        <router-link :to="{ name: 'PlayListView' }">
          <img
            class="logo_image"
            src="@/assets/video-camera.png"
            style="width: 35px; height: auto"
          />
          <p class="logo_word">Play List</p></router-link
        >
      </div>
      <!-- 리뷰  -->
      <div class="logo_box">
        <router-link :to="{ name: 'ReviewView' }">
          <img
            class="logo_image"
            src="@/assets/review.png"
            style="width: 35px; height: auto"
          />
          <p class="logo_word">Review</p></router-link
        >
      </div>
    </div>

    <hr class="community_nav_endline" />
    <!-- main_body -->
    <router-view id="router" />
  </div>
</template>

<script>
export default {
  name: "CommunityView",
};
</script>

<style>
#playlist_mement {
  margin-top: 100px;
  margin-bottom: 2%;
  color: white;
}
.community_logo {
  display: flex;
  justify-content: center;
}
.community_logo a {
  text-decoration: none;
}
.logo_word {
  color: white;
  text-decoration: none;
}
.logo_image {
  width: 40px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 5px;
}
.logo_box {
  display: flex;
  flex-direction: column;
}
.community_nav_endline {
  color: white;
  margin-left: 5%;
  margin-right: 5%;
}
</style>