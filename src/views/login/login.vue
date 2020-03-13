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
      <van-radio-group v-model="userType" direction="horizontal">
        <van-radio name="1" checked-color="#2a7bc5">老师</van-radio>
        <van-radio name="2" checked-color="#2a7bc5">学生</van-radio>
        <van-radio name="0" checked-color="#2a7bc5">管理员</van-radio>
      </van-radio-group>
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
      username: null,//1191010  1191011 1191012   20160000 20160001 20160002
      password: null,
      img:'@/assets/bg5.png',
      userType: 2,
      students:[20160000, 20160001, 20160002, 20160003],
      teachers:[1191010, 1191011, 1191012, 1191013],
    }
  },
  methods:{
    // 路由跳转
    toLogin(){
      debugger
      if (this.userType == 2) {
        this.students.forEach(item => {
          if(item == this.username) {
            this.$store.commit('changeUserType',2);
            this.$toast('登录成功！');
            setTimeout(() => {
              this.$router.push({path:'/user/homeIndex'});
               console.log(this.$store.state.userType);
            }, 1000);
          }
        });
        console.log(this.username,this.userType);
        
      }else if (this.userType == 1 || this.userType == 0) {
        this.teachers.forEach(item => {
          if(item == this.username) {
            this.$store.commit('changeUserType',this.userType);
            this.$toast('登录成功！');
            setTimeout(() => {
              this.$router.push({path:'/user/homeIndex'});
               console.log(this.$store.state.userType);
            }, 1000);
          }
        });
        console.log(this.username,this.userType);
      }
      
      
     
      
    }
  }
  //0 管理员 1老师 2学生  0男生  1女生
}
</script>
<style scoped>
  .login{
    background-image:url('~@/assets/bg.jpeg');
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
    margin-top: 240px;
  }
  .loginBox >>> .van-cell-group{
    margin: 0 10%;
    background: transparent;

  }
  .loginBox >>> .van-cell{
    background: transparent;

  }
  button{
    width: 80%;
    height: 37px;
    background: #2a7bc5;
    border: 1px solid #6ca0e8;
    border-radius: 15px;
    margin-top: 35px;
    color: #fff;
    outline:none;
  }
  .login >>> .van-radio-group{
    padding: 0 35px;
    margin-top: 35px;
  }
  .login >>> .van-radio{
    width: 100px;
    float: left;
    /* padding-left: 30px; */
  }
</style>