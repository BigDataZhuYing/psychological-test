<template>
  <div class="test">
    <p>点击下方开始答题</p>
    <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="toTest()">开始测试</van-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
    toTest() {
      let date = new Date;
      console.log(date.getDay());
      
    }
  }
}
</script>
 <style  scoped>
 .test{
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   background: #0089ff69;
   padding-top: 160px;
 }
 </style>