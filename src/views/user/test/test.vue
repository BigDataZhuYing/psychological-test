<template>
  <div class="test">
    <p style="color:#fff;line-height:43px;">为什么一瞬间<br>
      我们就在风里长大了<br>
      那些花开<br>
      那些日落<br>
      那些单纯清澈的时光<br>
      那些明亮的青春...</p>
    <p style="margin-top:100px;opcity:0.8">点击下方按钮开始测试</p>
    <van-button color="linear-gradient(to right, rgb(155, 201, 236), rgb(73, 182, 246))" @click="toTest()">开始测试</van-button>
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
      this.$router.push({
           name: 'testing',
        });
      const url = 'https://m.toutiao.com/list/?ac=wap&count=20&format=json_raw&as=A1A5CE4642446A2&cp=5E6254B68A423E1&min_behot_time=0&_signature=kPwVQwAAzqp4Jjc-Ofn71JD8FV&i=';
      this.$axios({
        method:'get',
        url: url,
        data:{

        }
    }).then((response) =>{          //这里使用了ES6的语法
        console.log(response)       //请求成功返回的数据
    }).catch((error) =>{
        console.log(error)       //请求失败返回的数据
    })
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
   /* background: #58baf7; */
   background-image:url('~@/assets/test.jpeg');
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
   /* padding-top: 160px; */
 }
 .test >>> .van-button{
   width: 145px;
   border-radius: 20px;
   font-size: 18px;
 }
 </style>