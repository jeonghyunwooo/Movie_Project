<template>
  <div class="login_box">
    <LoginModal/>
  </div>
</template>

<script>
import LoginModal from '@/components/Account/LoginModal'

export default {
  name: 'LoginView',
  components : {
    LoginModal,
  }
}
</script>

<style>
.login_box{
  margin: auto;
  width: 400px;
  margin-top: 30%;
  background-color: white;
}
</style>