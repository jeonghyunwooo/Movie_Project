<template>
  <div class='tmp_box'>
    <h1>Sing Up Page</h1>
    <form @submit.prevent="signUp">
        <label for="username">username : </label>
        <input type="text" id="username" v-model="username"><br>

        <label for="password1">password : </label>
        <input type="password" id="password1" v-model="password1"><br>
        
        <label for="password2">password 확인: </label>
        <input type="password" id="password2" v-model="password2"><br>

        <input type="submit" value="signUp">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SingUpView',
  data(){
    return {
        username:'',
        password1:'',
        password2:'',
    }
  },
  methods:{
    signUp(){
        const username = this.username
        const password1 = this.password1
        const password2 = this.password2

        const payload = {
            username, password1, password2
        }
        this.$store.dispatach('signUp',payload)
    }
  }
}
</script>

<style>

</style>