<template>
  <div class="collection">
    <div class="head"><van-icon name="arrow-left" @click="back()"/>我的收藏 </div>
    <div class="content">
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
    </div>
  </div>
</template>
<script>
export default {
  data () {
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
      studentComment: [],
      showTrends: 'none',
      newMessage: ''
    }
  },
  methods:{
    back() {
        this.$router.push({
          name: 'myset',
          
      });
    },
    teachingDetail() {
      this.$router.push({
          name: 'teaching-detail',
          params: {
            star: this.teachingconfig.star,
            like: this.teachingconfig.like,
            routerName: 'collection'
          }
      });
  },
  clickStar() {
    this.teachingconfig.star = !this.teachingconfig.star;
  },
  clickLike() {
    this.teachingconfig.like = !this.teachingconfig.like;
  },
  }
}
</script>
<style scoped>
.collection{
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
  margin-top: 45px;
  height:calc(100% - 45px);
  background: #e5e5e5;
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
.like{
  color: red;
}
.star{
  color: #ff9900;
}
</style>