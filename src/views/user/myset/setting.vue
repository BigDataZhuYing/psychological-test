<template>
  <div class="setting">
    <div style="height:100%">
      <div class="head"><van-icon name="arrow-left" @click="back()"/>设置 </div>
      <div class="content">
        <van-cell title="账号与安全" is-link  @click="person(1)"/>
        <van-cell title="帮助" is-link  @click="person(2)"/>
        <van-field label="关于系统" input-align="right"  placeholder="v0.0.1" readonly=""/>
        <div class="logout">退出登录</div>
      </div>
    </div>
    <div class="number" :style="{display: number}">
      <div class="head"><van-icon name="arrow-left" @click="setting_back()"/>账号安全 </div>
      <div class="content">
        <van-field  placeholder="未填写" input-align="right" label="手机账号"  />
        <van-cell title="重置密码" is-link />
      </div>
    </div>
    <div class="help" :style="{display: help}">
      <div class="head"><van-icon name="arrow-left" @click="setting_back()"/>帮助 </div>
      <div class="content">
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 'none',
      help: 'none',
    }
  },
  methods:{
    back() {
        this.$router.go(-1);
    },
    person(i) {
      if(i == 1) {
        this.number = 'block';
      }else {
        this.help = 'block';
      }
    },
    setting_back() {
      this.number = 'none';
      this.help = 'none';
    }
  }
}
</script>
<style scoped>
.setting{
   height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: #fff;
    z-index: 1; 
}
.head{
    height: 45px;
    line-height: 45px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.head >>> .van-icon{
    position: absolute;
    left: 7px;
    top: 10px;
    font-size: 22px;
}
.content{
  background: #e5e5e5;
  padding-top: 15px;
  margin-top: 45px;
  height: calc(100% - 55px);
}
.content >>> .van-cell{
  text-align: left;
}
.logout{
  height: 45px;
  line-height: 45px;
  background: #fff;
  margin-top: 30px;
}
.number,.help{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  display: none
}
</style>