<template>
  <div>
    <h1 >로그인</h1>
    <form @submit.prevent="login" style="background-color: black">
      <label for="username">usermane :</label>
      <input type="text" id="username" v-model="usermane"><br>
  
      <label for="password">password :</label>
      <input type="password" id="password" v-model="password"><br>

      <input type="submit" value="로그인" class="box">
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginModal',
  data() {
    return {
      username:'',
      password:''
    }
  },
  // methods: {
  //   login(){
  //     const username = this.username
  //     const password = this.password

  //     const payload = {
  //       username, password
  //     }

  //     this.$st
  //   }
  // },
}
</script>

<style>
.box{
  background-color: red;
  color: white;
  width: 300px;
}
</style>