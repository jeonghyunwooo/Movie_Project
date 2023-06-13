<template>
  <div class="main_body">
    <div class="back_image" ></div>

    <div class='tmp_box'>
      <div>
        <h1>Login</h1>
      </div>
    
      <div class="login">
        <form @submit.prevent="signUp">
            <div class="input_box">
              <label for="username" class="label-spacing" style="margin-right: 62px;">ID :</label>
              <input type="text" id="username" v-model="username"><br>
            </div>
          
            <div class="input_box">
              <label for="password1" class="label-spacing">password : </label>
              <input type="password" id="password1" v-model="password"><br>
            </div>
            
            <div class="button">
              <input type="submit" value="로그인" style="margin-bottom: 50px;" @click="login"  @keyup="login"> 
              <input class="singup" type="submit" value="회원가입" @click="SignUp">
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username:'',
      password:'',
    }
  },
  methods: {

    // 로그인
    login(){
      const username = this.username
      const password = this.password

      const payload = {
        username, password
      }

      this.$store.dispatch('login',payload)
    },

    // 회원가입View로 이동
    SignUp(){
      this.$router.push({name:'SignUpView'})
    }
  },
}
</script>

<style scoped>
.main_body{
  position: absolute;
  width : 100%;
  height: 100%;

}
.back_image{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("https://image.tmdb.org/t/p/w500/4NWWpT0jiMUak8r6jfpvG4eBgFU.jpg");
  background-size: cover;
  opacity: 0.4;
  z-index: -1;
  opacity: 0; /* 초기에는 투명하게 설정 */
  animation: fade-in 2s ease-in-out forwards; /* fade-in 애니메이션 적용 */
}
.tmp_box{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  color: black;
  width: 500px;
  height: 270px;
  border-radius: 10px;
  margin-top: 250px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0; /* 초기에는 투명하게 설정 */
  animation: fade-in 2s ease-in-out forwards; /* fade-in 애니메이션 적용 */

}

.label-spacing {
    margin-right: 10px; /* 원하는 만큼의 공백 크기를 설정하세요 */
  }
.input_box{
  margin-bottom: 10px;
  display: flex;
  margin-left: 92px;
}
.button{
  display: flex;
  justify-content: center;
  margin-left: 23px;

}
.singup{
  height: 30px;
  margin-left: 20px;

}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}

</style>