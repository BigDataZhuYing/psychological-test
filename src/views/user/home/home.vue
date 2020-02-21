<template>
<div class="home">
  <div style="height:100%">
    <div class="head">
      <span class="logo"><img  src="~@/assets/school.jpg" alt=""></span>
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
      <div class="stu-content" v-for="( item, index) of studentComment" :key="index">
        <div >
          <div class="title">
            <span class="title-title">{{item.name.substr(item.name.length - 2)}}</span>
            <span style="font-size: 14px;">{{item.time}} | 河北北方学院</span>
          </div>
          <div class="content-box-top">
            <div class="content" style="overflow:hidden;" >{{item.content}}</div>
            <div class="content-btn">展开/收起</div>
            <div class="operation">
              <!-- <span><van-icon name="chat" />评论</span> -->
              <span><van-icon :name="item.like ? 'like': 'like-o'" class="like" @click="itemLike(index)"/>喜欢</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
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
        studentComment: [
          {index: 'comment0', name: '朱莹', time: '02/01 12:23', content:'还会记得回家的解决房价还会发毒贩夫妇付付付电动蝶阀多付付付付', like: false},
          {index: 'comment1', name: '朱莹', time: '02/01 12:23', content:'还会记得回家的解决房价还会发毒贩夫妇付付付电动蝶阀多付付付付', like: false},
          {index: 'comment2', name: '朱莹', time: '02/01 12:23', content:'还会记得回家的解决房价还会发毒贩夫妇付付付电动蝶阀多付付付付', like: false},
          {index: 'comment3', name: '朱莹', time: '02/01 12:23', content:'还会记得回家的解决房价还会发毒贩夫妇付付付电动蝶阀多付付付付', like: false},
        ]
      }
    },
    created() {
      this.teachingconfig.star = this.$route.params.star;
      this.teachingconfig.like = this.$route.params.like;
    },
    mounted(){
      
      
      
    },
    methods: {
      teachingDetail() {
        this.$router.push({
           name: 'teaching',
           params: {
             star: this.teachingconfig.star,
             like: this.teachingconfig.like
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
}
.content-btn{
  color: #1890ff;
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
  margin: 0 20px;
  cursor: pointer;
}
.like{
  color: red;
}
.star{
  color: #ff9900;
}
</style>