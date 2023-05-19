<template>
  <div class="tmp_box">
    <h1 >로그인</h1>
    <form @submit.prevent="login" style="background-color: black">
      <label for="username">usermane :</label>
      <input type="text" id="username" v-model="usermane"><br>
  
      <label for="password">password :</label>
      <input type="password" id="password" v-model="password"><br>

      <input type="submit" value="로그인" class="box">
    </form>
    <button @click='toSignUp'>회원가입</button>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    // login(){
    //   const username = this.username
    //   const password = this.password

    //   const payload = {
    //     username, password
    //   }

    //   this.$st
    // },
    toSignUp(){
      this.$router.push({name:'SignUpView'})
    }
  },
}
</script>

<style>
.tmp_box{
  background-color: rgb(32, 28, 28);
  position: relative;
  margin: auto;
  margin-top: 400px;
  color: white;
  width: 450px;
  height: 200px;
}
</style>