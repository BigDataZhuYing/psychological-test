<template>
  <div class="myset">
    <div class="title" @click="setTitle()">
      <span></span>
    </div>
    <div class="settings" v-for="(item, index) of settings" :key="index" @click="topage(index)">
      <van-cell :title="item.title" is-link :icon="item.icon"/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      settings:[
        {title: '单元格', icon: 'shop-o'},
        {title: '单元格', icon: 'shop-o'},
        {title: '单元格', icon: 'shop-o'},
        {title: '单元格', icon: 'shop-o'},
      ]
    }
  },
  methods:{
    setTitle() {
      
    },
    topage(i) {
      alert(i);
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
  .title span{
    width: 50px;
    height: 50px;
    display: inline-block;
    background: yellow;
    border-radius: 25px;
    margin: 20px 35px;
  }
</style>