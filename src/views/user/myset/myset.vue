<template>
  <div class="myset">
    <div class="title" @click="setTitle()">
      <span class="portrait">{{userName.substr(userName.length - 2)}}</span>
      <span>
        <span style="font-size:20px">{{schoolName}}</span>
        <br>
        <span style="font-size:14px">{{majorName}}</span>
      </span>
    </div>
    <div  v-for="(item, index) of settings" :key="index" @click="topage(index, item.router)" >
      <van-cell :title="item.title" is-link :icon="item.icon" :class="{'setting':index == settingIndex}"/>
    </div>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
      userName: "朱莹",
      schoolName: "河北北方学院",
      majorName: '信息管理与信息系统2班',
      settingIndex: 5,
      settings:[
        {router: 'information', title: '个人信息', icon: 'manager-o'},
        {router: 'collection', title: '我的收藏', icon: 'star-o'},
        {router: 'setting', title: '设置', icon: 'setting-o'},
        {router: 'comment', title: '我的提议', icon: 'comment-o'},
      ]
    }
  },
  methods:{
    setTitle() {
      
    },
    topage(i, routerName) {
      this.settingIndex = i;
      setTimeout(() => {
        this.$router.push({name: routerName});
        this.settingIndex = 5;
      },0)
    }
  }
}
</script>
<style scoped>
  .myset{
    background-image:url('~@/assets/ac.png');
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
  .myset >>> .van-cell__title{
    text-align: left!important;
  }
  .title{
    margin-top: 130px;
    text-align: left;
  }
  .title span {
    display: inline-block;
  }
  .title span.portrait{
    width: 50px;
    height: 50px;
    display: inline-block;
    background: #1890ff;
    border-radius: 25px;
    margin: 20px;
    line-height: 50px;
    font-size: 15px;
    color: #fff;
    text-align: center;
  }
  .setting{
    background: #f7f8fa;
  }

</style>