<template>
  <div class="login">
    <div class="loginBox">
      <!-- <div><img src="~@/assets/aa.png"/></div> -->
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      <button @click="toLogin()">登录</button>
    </div>
    
  </div>
</template>

<script>
import img from '@/assets/bg5.png'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '122323',
      password: '1232434',
      img:'@/assets/bg5.png'
    }
  },
  methods:{
    // 路由跳转
    toLogin(){
      this.$router.push({path:'/user/homeIndex'})
    }
  }
}
</script>
<style scoped>
  .login{
    background-image:url('~@/assets/bg5.png');
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
    margin-top: 385px;
  }
  .loginBox >>> .van-cell-group{
    margin: 0 10%;

  }
  button{
    width: 80%;
    height: 30px;
    background: #3693e8;
    border: 1px solid #6ca0e8;
    border-radius: 15px;
    margin-top: 35px;
    color: #fff;
    outline:none;
  }
</style>