<template>
  <div id="app">
    <nav class="active">
      <div class="nav_left">
        <router-link :to="{name: 'HomeView'}" id="movie_logo" >Movie Choice</router-link> 
        <router-link :to="{name: 'HomeView'}">Home</router-link>
        <!-- <router-link :to="{name: 'ReviewView'}">Review</router-link> -->
        <router-link :to="{name: 'CommunityView'}">Community</router-link>
        <router-link :to="{name: 'MypageView'}">Mypage</router-link>
      </div>
      <div class="nav_right">
      </div>
    </nav>
    <router-view id="router"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:fixed;
  z-index:1;
  top:0px;
  left: 0;
  right: 0;
}
nav.active {
    border-bottom: 1px solid rgba(255,255,255,0.12);
    background: none;
}
.nav_left{
  display: flex;
  align-items: center;
  margin-top:5px;
}
nav a {
  color: white;
  text-decoration: none;
  margin:15px
}
nav a.router-link-exact-active {
  /* color: #42b983; */
}
@import url('https://fonts.googleapis.com/css?family=Kaisei+Opti&display=swap');

#movie_logo{
  color: whitesmoke;
  font-family: 'Kaisei Opti', sans-serif;
  margin-left: 33px;
  margin-right: 50px;
  font-size: xx-large
}
body{
  background-color: black;
}
</style>
