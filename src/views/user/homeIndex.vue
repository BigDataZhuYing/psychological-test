<template>
<div class="home">
    <van-tabbar v-model="active" v-if="isShow">
        <van-tabbar-item icon="home-o" @click="goPage('/user/homeIndex')">首页</van-tabbar-item>
        <van-tabbar-item icon="friends-o" :dot="true"  @click="goPage('/user/consult')">咨询</van-tabbar-item>
        <van-tabbar-item icon="chart-trending-o" info="5" :dot="true"  @click="goPage('/user/statistics')">统计</van-tabbar-item>
        <van-tabbar-item icon="notes-o" :dot="true" @click="goPage('/user/test')">测评</van-tabbar-item>
        <van-tabbar-item icon="manager-o" :dot="true" @click="goPage('/user/myset')">个人中心</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
</div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      isShow: true
    }
  },
  methods: {
    goPage(path) {
        this.$router.push({ path: path});
    }
  },
  watch: {
    $route(to, from) {
      if(to.name == 'homeIndex' || to.name == 'consult' || to.name == 'statistics' || to.name == 'myset' || to.name == 'test') {
          console.log(111);
      }else {

      }
    }
  }
}
</script>
//#1890ff
<style>
    .home{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #e9e9e9;
    }
  
</style>

