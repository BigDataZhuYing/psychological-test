<template>
  <div class="login">
    <div class="loginBox">
      <header>logo</header>
      <div class="field">
        <input type="text" icon="user-o"/>
        <input type="password" icon="closed-eye"/>
      </div>
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
  .login{
    background-image:url('~@/assets/login.jpg');
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    width: 100%;    
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .loginBox{
    width:260px;
    height:200px;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-130px;
    margin-left:-130px;
  }
  input{
    background: transparent;
    border: none;
    border-bottom: 1px solid #ccc;
    width: 80%;
    height: 30px;
    margin-top: 10px;
    outline:none;
  }
  button{
    width: 90px;
    height: 30px;
    background: #3693e8;
    border: 1px solid #6ca0e8;
    border-radius: 5px;
    margin-top: 35px;
    color: #fff;
    outline:none;
  }
</style>