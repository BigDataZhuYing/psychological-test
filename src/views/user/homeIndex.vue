<template>
<div class="home">
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" @click="goPage('/user/homeIndex')">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o" :dot="true"  @click="goPage('/user/consult')">标签</van-tabbar-item>
        <van-tabbar-item icon="chart-trending-o" info="5"  @click="goPage('/user/statistics')">标签</van-tabbar-item>
        <van-tabbar-item icon="notes-o" info="20" @click="goPage('/user/test')">标签</van-tabbar-item>
        <van-tabbar-item icon="manager-o" info="20" @click="goPage('/user/myset')">标签</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
</div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    goPage(path) {
        this.$router.push({ path: path});
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

