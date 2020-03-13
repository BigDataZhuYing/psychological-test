<template>
  <div class="information">
    <div class="head"><van-icon name="arrow-left" @click="back()"/>我的资料 </div>
    <div class="content">
        <div class="base">
            <van-field   input-align="right" label="基本资料" disabled />
            <van-field v-model="data.name" placeholder="未填写" input-align="right" label="姓名" readonly />
            <van-field v-model="data.sex" placeholder="未填写" input-align="right" label="性别" readonly />
            <van-field v-model="data.birthday" placeholder="未填写" input-align="right" label="生日" />
            <van-field v-model="data.location" placeholder="未填写" input-align="right" label="所在地" />
        </div>
        <div class="status">
            <van-field   input-align="right" label="学籍资料" disabled />
            <van-field v-model="data.department" placeholder="未填写" input-align="right" label="院系" readonly />
            <van-field v-model="data.major" placeholder="未填写" input-align="right" label="专业" readonly />
            <van-field v-model="data.education" placeholder="未填写" input-align="right" label="学历" readonly />
            <van-field v-model="data.enrollment_year" placeholder="未填写" input-align="right" label="入学年份" readonly />
        </div>
        <div class="personal">
            <van-field  input-align="right" label="个性资料" disabled />
            <van-cell title="个人签名" is-link :value="data.signature" @click="person(1)"/>
            <van-cell title="兴趣爱好" is-link :value="data.interest" @click="person(2)"/>
            <van-cell title="近期动向" is-link :value="data.recent_trends" @click="person(3)"/>
            <!-- <van-field v-model="data.signature" placeholder="未填写" input-align="right" label="个人签名" />
            <van-field v-model="data.interest" placeholder="未填写" input-align="right" label="兴趣爱好" />
            <van-field v-model="data.recent_trends" placeholder="未填写" input-align="right" label="近期动向" /> -->
        </div>
    </div>
    <div class="person-view" :style="{display: showPersonView}">
      <header><span @click="cancel()">×</span> {{titleName}} <span @click="send()">完成</span></header>
      <div class="person-content">
        <textarea name="" id="" v-model="newMessage" ref="focusTextarea" placeholder="让别人更了解你..."></textarea>
        <p>30字</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      titleName: '',
      showPersonView: 'none',
      newMessage: '',
      data:{
        name: '朱莹',
        sex: '女',
        birthday: '1997.10.17',
        location: '河北省保定',
        department: '信息科学与工程学院',
        major: '信息管理与信息系统',
        education: '本科',
        enrollment_year: '2016',
        signature: '未填写',
        interest: '未填写',
        recent_trends: '未填写'
      }
    }
  },
  methods:{
    back() {
        this.$router.go(-1);
    },
    person(i) {
      this.newMessage = '';
      switch (i) {
        case 1:
          this.titleName = '个人签名';
          break;
        case 2:
          this.titleName = '兴趣爱好';
          break;
        case 3:
          this.titleName = '近期动向';
          break;
        default:
          break;
      }
      this.showPersonView = 'block';
      this.$nextTick(_=> {
        this.$refs.focusTextarea.focus();          
      },1000)
    },
    cancel() {
        this.showPersonView = 'none';
        this.newMessage = '';
    },
    send() {
      this.showPersonView = 'none';
      switch (this.titleName) {
        case '个人签名':
          this.data.signature = this.newMessage;
          break;
        case '兴趣爱好':
          this.data.interest = this.newMessage;
          break;
        case '近期动向':
          this.data.recent_trends = this.newMessage;
          break;
        default:
          break;
      }
    }
  }
}
</script>
<style scoped>
.information{
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
    height:calc(100% - 45px);
    margin-top: 45px;
    overflow: scroll;
}
.base,
.status,
.personal{
    text-align: left;
}
.base .van-field:nth-child(1) >>> .van-cell__title,
.status .van-field:nth-child(1) >>> .van-cell__title,
.personal .van-field:nth-child(1) >>> .van-cell__title{
    color:#888;
}
.base .van-field:nth-child(1),
.status .van-field:nth-child(1),
.personal .van-field:nth-child(1){

    background: #e5e5e5;
}
.person-view{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  color: #000;
  z-index: 500;
}
.person-view header{
  height: 50px;
  line-height: 50px;
  font-size: 18px;
}
.person-view header span:nth-child(2){
  position: absolute;
  right: 20px;
}
.person-view header span:nth-child(1){
  position: absolute;
  left: 20px;
  font-size: 36px;
}
.person-view .person-content{
  height: calc(100% - 50px);
}
.person-view .person-content textarea{
  /* background: #e5e5e5; */
  border: none;
  height: 50px;
  width: calc(100% - 20px);
  padding: 15px;
}
.person-view .person-content p{
  padding: 0;
  margin: 0;
  height: 40px;
  line-height: 40px;
  text-align: right;
  padding-right: 10px;
  color: #C11;
  border-top: 1px solid #ccc;
  margin: 0 15px;
}
</style>