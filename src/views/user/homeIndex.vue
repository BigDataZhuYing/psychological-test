<template>
<div class="home">
    <div class="userTag">
        <div>
            <span>首页</span>
            <span>咨询</span>
            <span>统计</span>
            <span>测评</span>
            <span>我的</span>
        </div>
    </div>
    <div><router-view></router-view></div>
</div>
</template>
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
    }
  .userTag span{
      display:inline-block;
      width:55px;
      color:#1890ff;
  }
</style>

