<template>
<div class="teaching">
    <div class="head"><van-icon name="arrow-left" @click="goBack()"/>教学详情</div>
    <div class="tea-content" @click="clickOut()" ref="content">
        <div class="content">
            爱国福我师父大V从中导出中从VB中超中超从哪 高合金钢或扩军扩或扩或军军军军
            军军军军军军军军军军军军军VB错VB错不不不不不不不不不不不不不不不不不不不不不不不不不 
        </div>
        <div class="content-img">
            <img src="~@/assets/teaching1.png" alt="">
            <img src="~@/assets/teaching2.png" alt="">
        </div>
        <p>精彩评论</p>
        <div class="comment" v-for="(item,index) of commentTotal" :key="index">
            <div class="comment-item"><span> {{item.name}}:</span>{{item.content}}</div>
        </div>
    </div>
    <div class="bottom">
        <div class="operation"  :style="{display:isEject ? 'none':'block'}">
            <span><van-icon :name="star ? 'star': 'star-o'" class="star" @click="clickStar()"/>收藏</span>
            <span><van-icon name="chat" @click="ejectChat()"/>评论</span>
            <span><van-icon :name="like ? 'like': 'like-o'" class="like" @click="clickLike()"/>喜欢</span>
        </div>
        <div class="chat" :style="{display:isEject ? 'block':'none'}">
          <input type="text" v-model="chatContent" ref="text">
          <button class="send" @click="send()">发送</button>
        </div>
    </div>
    
</div>
</template>
<script>
  export default {
    data() {
      return {
        star: false,
        routerName: '',
        like: false,
        isEject: false,
        chatContent: '',
        commentTotal: []
      }
    },
    created() {
      this.star = this.$route.params.star;
      this.like = this.$route.params.like;
      console.log(this.$store.getters.getComment);
      this.commentTotal = this.$store.getters.getComment;
      this.routerName = this.$route.params.routerName;
    },
    mounted(){
      this.$refs.text.focus();
    },
    methods: {
      goBack() {
        this.$router.push({
           name: this.routerName,
           params: {
             star: this.star,
             like: this.like
           }
        });
      },
      clickStar() {
        this.star = !this.star;
      },
      clickLike() {
        this.like = !this.like;
      },
      ejectChat() {
        this.isEject = true;
        setTimeout(() => {
          this.$refs.text.focus();
        }, 1000);
      },
      send() {
        this.$store.commit('changeComment',{name: '朱莹',content: this.chatContent})
        this.isEject = false;
        this.chatContent = '';
      },
      clickOut() {
        this.isEject = false;
      },
    },
  }
</script>
<style scoped>
.teaching{
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
    background: #e5e5e5;
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
.tea-content{
    height: calc(100% - 90px);
    margin-top: 45px;
    overflow-y: scroll;
    padding: 10px;
    text-align: left;
    line-height:30px;
}
.content-img img{
    width: 100%;
    margin-bottom: 10px;
    border-radius: 10px;
}
.comment .comment-item{
    margin-bottom: 5px;
}
.comment .comment-item span{
    color: #1890ff;
    
}
.bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #e5e5e5;
    height: 45px;
    line-height: 45px;
}
.bottom .operation span{
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  width: 60px;
  margin: 0 20px;
  cursor: pointer;
}
.bottom .operation span >>> .van-icon{
  margin-right: 5px !important;
}
.bottom .chat{
  height: 45px;
  line-height: 40px;
  width: 100%;
}
.bottom .chat input{
  background: #e5e5e5;
  border: none;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  width: calc(100% - 80px)
 
}

.bottom .chat .send{
  width: 65px;
  height: 40px;
  background: #1890ff;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  color: #fff;
}
.like{
  color: red;
}
.star{
  color: #ff9900;
}
</style>