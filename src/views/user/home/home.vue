<template>
<div class="home">
  <div style="height:100%">
    <div class="head">
      <span class="logo"><img  src="~@/assets/school.png" alt=""></span>
      <span>河北北方学院</span>
    </div>
    <div class="box">
      <div class="teacher-content">
        <div>
          <div class="title">
            <span style="display:inline-block;height:20px;width:5px;background:#1890ff"></span>
            <span style="font-size:22px">Talk</span>
            <span>今日教学</span>
            <span style="float:right"><van-icon name="arrow" @click="teachingDetail()" /></span>
          </div>
          <div class="content-box">
            <div class="content-left">
              <div class="content-title">[{{teachingconfig.title}}]</div>
              <div>{{teachingconfig.content}}</div>
            </div>
            <div class="cont-img-right" v-if="teachingconfig.imgs.length">
                <img :src="teachingconfig.imgs[0]" alt="">
            </div>
            <div class="operation">
              <span><van-icon :name="teachingconfig.star ? 'star': 'star-o'" class="star" @click="clickStar()"/>收藏</span>
              <span><van-icon name="chat"  @click="teachingDetail()"/>评论</span>
              <span><van-icon :name="teachingconfig.like ? 'like': 'like-o'" class="like" @click="clickLike()"/>喜欢</span>
            </div>
          </div>
        </div>
      </div>
      <div class="stu-content" v-for="( item, index) of studentComment" :key="index" >
        <div >
          <div class="title">
            <span class="title-title">{{item.name.substr(item.name.length - 2)}}</span>
            <span style="font-size: 14px;">{{item.time}} | 河北北方学院</span>
          </div>
          <div class="content-box-top">
            <div :class="{content: item.isHidden}" ref="box">{{item.content}}</div>
            <div class="content-btn">
              <span v-if="item.overstep" style="font-size:14px" @click="open(index,item.isHidden)">{{item.isHidden ? '阅读全文' : '收起'}}</span>
            </div>
            <div class="operation">
              <span><van-icon name="delete" v-if="uerType != 2"/>删除</span>
              <span><van-icon :name="item.like ? 'like': 'like-o'" class="like" @click="itemLike(index)"/>喜欢</span>
            </div>
          </div>
        </div>
      </div>
      <button class="release" ref="release" @click="toTrends()">
        <van-icon name="plus" />
      </button>
      
    </div>
  </div>
  <div class="trends"  :style="{display: showTrends}">
    <header><span @click="cancel()">×</span> 发布动态 <span @click="send()">发送</span></header>
    <div class="trends-content">
      <textarea name="" id="" v-model="newMessage" ref="focusTextarea" placeholder="畅所欲言，给心灵一片晴空..."></textarea>
      <p>500字</p>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        uerType: null,
        teachingconfig:{
          title: '高校教师开家庭音乐会，为亲朋好友送春节祝福',
          content: '哈哈哈经检查宝宝崇拜结算单辉煌成就大V从V型你v 技术的结合实际的环境的开车距被查出滞纳金科技市场健康大会地产界的环境',
          imgs: [
            '/static/img/teaching1.16bc57a.png',
            '/static/img/teaching2.16bc57a.png'
          ],
          comment: [
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超1', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超2', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超3', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超4', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超5', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超6', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
            {name: '赵起超', comment: '金海环境速度和大家还记得画法几何'},
          ], 
          star: false,
          like: false,
        },
        studentComment: [],
        showTrends: 'none',
        newMessage: ''
      }
    },
    created() {
      this.userType = this.$store.state.userType;
      this.teachingconfig.star = this.$route.params.star;
      this.teachingconfig.like = this.$route.params.like;
      this.studentComment = this.$store.state.studentComment;
    },
    mounted(){
      this.update();
      this.$refs.focusTextarea.focus();
      
    },
    methods: {
      update() {
        this.$refs['box'].forEach((item, index) => {
          if (item.offsetHeight > 63) {
            this.studentComment[index].overstep = true;
            this.studentComment[index].isHidden = true;
          }
          console.log(this.studentComment[index].overstep,this.studentComment[index].isHidden);
        });
      },
      teachingDetail() {
        this.$router.push({
           name: 'teaching',
           params: {
             star: this.teachingconfig.star,
             like: this.teachingconfig.like,
             routerName: 'homeIndex'
           }
        });
      },
      clickStar() {
        this.teachingconfig.star = !this.teachingconfig.star;
      },
      clickLike() {
        this.teachingconfig.like = !this.teachingconfig.like;
      },
      itemLike(index) {
        this.studentComment[index].like = !this.studentComment[index].like;
      },
      open(index, state) {
        this.studentComment[index].isHidden = !state;
      },
      toTrends() {
        this.showTrends = 'block';       
        this.$nextTick(_=> {
          this.$refs.focusTextarea.focus();          
        },3000)
      },
      cancel() {
        this.showTrends = 'none';
      },
      send() {
        this.showTrends = 'none';
        this.$store.commit('changeStudentComment',{overstep: false, isHidden: false, name: '朱莹', time: '02/21 12:23', content:this.newMessage, like: false})
        setTimeout(() => {
          this.update();
        }, 100);
        this.newMessage = '';
      }
      
    }
  }
</script>
<style scoped>
.home{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* background: #fff; */
}
.head{
  height: 100px;
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* background: #e5e5e5; */
  background-image:url('~@/assets/timg8.jpg');
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
  z-index: 500;
}
.head span{
  margin-top: 50px;
  display: inline-block;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  color: #000;
  margin-left: 10px;
}
.logo{
  width:50px;
}
.logo img{
  width: 100%;
}
.box{
  height: calc(100% - 90px);
  margin-top: 100px;
  overflow-y: scroll;
}
.teacher-content{
  background: #fff;
  padding: 10px 20px;
  margin-bottom: 10px;
}
.teacher-content .title{
  text-align: left;
  margin: 5px 0;
}
.teacher-content .content-box{
  background: #e5e5e5;
  padding: 8px;
  border-radius: 10px;
}
.teacher-content .content-box .content-title{
  color: #000;
  text-align: left;
  padding-left: 5px;
}
.teacher-content .content-box .operation span{
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  width: 60px;
  margin: 0 10px;
  cursor: pointer;
}
.teacher-content .content-box .operation span >>> .van-icon{
  margin-right: 5px !important;
}
.teacher-content .content-left{
  float: left;
  height: 125px;
  width: 70%;
  overflow: hidden;
}
.teacher-content .cont-img-right{
  float: left;
  height: 125px;
  width: 30%;
}
.cont-img-right img{
  width: 100%;
   border-radius: 10px;
}
.stu-content{
  background: #fff;
  padding: 10px 20px 0 20px;
  margin-bottom: 10px;
}
.stu-content .title{
  text-align: left;
  margin: 5px 0;
}
.stu-content .title-title{
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #1890ff;
  line-height: 40px;
  font-size: 15px;
  color: #fff;
  text-align: center;
}
.stu-content .content-box-top{
  text-align: left;
}
.stu-content .content-box-top .content{
  height: 63px;
  overflow:hidden;
}
.content-btn{
  color: #1890ff;
  margin-top: 5px;
  height: 21px;
}
.stu-content .content-box-top .operation{
  text-align: right;
  border-top: 1px solid #e5e5e5;
  margin-top: 10px;
}
.stu-content .content-box-top .operation span{
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  width: 60px;
  /* margin-right: 20px; */
  cursor: pointer;
}
.like{
  color: red;
}
.star{
  color: #ff9900;
}
.release{
  border-radius: 25px;
  position: fixed;
  right: 15px;
  bottom: 65px;
  background: #1890ff;
  border: none;
  height: 50px;
  width: 50px;
  color: #fff;
  font-size: 35px;
  text-align: center;
  line-height: 50px;
}
.release >>> .van-icon{
  font-size: 25px!important;
}
.trends{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  color: #000;
  z-index: 500;
}
.trends header{
  height: 50px;
  line-height: 50px;
  font-size: 18px;
}
.trends header span:nth-child(2){
  position: absolute;
  right: 20px;
}
.trends header span:nth-child(1){
  position: absolute;
  left: 20px;
  font-size: 36px;
}
.trends .trends-content{
  height: calc(100% - 50px);
}
.trends .trends-content textarea{
  background: #e5e5e5;
  border: none;
  height: calc(100% - 60px);
  width: calc(100% - 20px);
  padding: 10px;
}
.trends .trends-content p{
  padding: 0;
  margin: 0;
  height: 40px;
  line-height: 40px;
  text-align: right;
  padding-right: 10px;
  color: #C11;
}
</style>