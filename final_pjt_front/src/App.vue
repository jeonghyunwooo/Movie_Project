<template>
  <div id="app">
    <nav class="active">
      <div class="nav_left">
        <router-link :to="{name: 'HomeView'}" id="movie_logo" >Movie Choice</router-link> 
        <router-link :to="{name: 'HomeView'}">Home</router-link>
        <router-link :to="{name: 'CommunityView'}">Community</router-link>
        <router-link :to="{name: 'MypageView'}">Mypage</router-link>
      </div>
      <div class="nav_right">
        <img class="user" src="./assets/user(2).png" alt="">
        <p class="logout" @click="logout">Logout</p>
      </div>
    </nav>
    <router-view id="router"/>
  </div>
</template>

<script>
import router from '@/router'
export default {
  methods:{ 
    logout(){
      this.$store.state.isLogin = false
      this.$store.state.token = ''
      if (router.currentRoute.name !== "LoginView") {
        router.push({ name: "LoginView" })
      }
    }
  }
}
</script>

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

.nav_right{
  display: flex;
  align-items: center;
  margin-right: 30px;
}

nav a {
  color: white;
  text-decoration: none;
  margin:15px
}

/* navbar 호버 되면은 검은색으로 변함 */
nav:hover {
  background-color: #000000; /* 호버 시 배경색 변경 */
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

.logout{
  color: white;
  font-size: 23px;
  margin-top:24px;

}

.user{
  width: 35px;
  height: 35px;
  border-radius: 18px;
  margin-top: 10px;
  margin-right : 20px;
}
</style>
