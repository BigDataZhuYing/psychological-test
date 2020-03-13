<template>
  <div class="comment">
    <div class="head"><van-icon name="arrow-left" @click="back()"/>我的提议 <span @click="submit()">提交</span> </div>
    <div class="content">
        <div>
          <div class="title">1.描述您的问题</div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <div class="title">2.提出您的建议</div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <div class="title" style="margin-top:20px">*留下您的联系方式</div>
          <table>
            <tr>
              <td>qq：</td>
              <td><input type="text"></td>
            </tr>
            <tr>
              <td>手机号：</td>
              <td><input type="text"></td>
            </tr>
          </table>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
    back() {
        this.$router.go(-1);
    },
    submit() {
      this.$toast('提交成功');
    }
  }
}
</script>
<style scoped>
.comment{
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
    background: #e5e5e5;
}
.head >>> .van-icon{
    position: absolute;
    left: 7px;
    top: 10px;
    font-size: 22px;
}
.head span{
      position: absolute;
    right: 10px;
    top: 5px;
    color: #1890ff;
    display: inline-block;
    width: 50px;
    height: 32px;
    /* background: #1890ff;
    color: #fff; */
    border-radius: 5px;
    line-height: 32px;
}
.content{
  /* background: #e5e5e5; */
  padding-top: 15px;
  margin-top: 45px;
  height: calc(100% - 55px);
}
.title{
  text-align: left;
  padding-left: 10px;
  color: #807d7d;
}
textarea{
  width: calc(100% - 30px);
  border: none;
  background: #e5e5e5;
  height: 120px;
  margin-top: 10px;
  border-radius: 10px;
}
table{
  width: 100%;
  margin-top: 10px;
}
table tr {
  width: 100%;
  height: 50px;
}
table tr td:nth-child(1){
  width: 30%;
  text-align: right;
}
table tr td:nth-child(2){
  width: 70%;
  text-align: left;
}
input{
  height: 30px;
    border: none;
    border-radius: 5px;
    background: #e5e5e5;
}
</style>