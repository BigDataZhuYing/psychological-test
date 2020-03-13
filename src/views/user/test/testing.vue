<template>
  <div class="testing">
    <div class="head"><van-icon name="arrow-left" @click="back()"/>测试 </div>
    <div class="topic">
        {{index + 1}}/7
        <span @click="submit()">提交</span>
    </div>
    <div class="content">
        <div class="title">{{data[index].index + 1}}.{{data[index].title}}</div>
        <!-- <div class="answer">
            <div style="position:relative" v-if="data[index].option1"><span>A</span><p>{{data[index].option1}}</p></div>
            <div style="position:relative" v-if="data[index].option2"><span>B</span><p>{{data[index].option2}}</p></div>
            <div style="position:relative" v-if="data[index].option3"><span>C</span><p>{{data[index].option3}}</p></div>
            <div style="position:relative" v-if="data[index].option4"><span>D</span><p>{{data[index].option4}}</p></div>
            <div style="position:relative" v-if="data[index].option5"><span>E</span><p>{{data[index].option5}}</p></div>
        </div> -->
        <van-radio-group v-model="radios[index]">
            <!-- <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio> -->
            <van-radio v-if="data[index].option1"  name="1">A.{{data[index].option1}}</van-radio>
            <van-radio v-if="data[index].option2"  name="2">B.{{data[index].option2}}</van-radio>
            <van-radio v-if="data[index].option3"  name="3">C.{{data[index].option3}}</van-radio>
            <van-radio v-if="data[index].option4"  name="4">D.{{data[index].option4}}</van-radio>
            <van-radio v-if="data[index].option5"  name="5">E.{{data[index].option5}}</van-radio>
        </van-radio-group>
    </div>
    <div class="bottom">
        <div class="left" @click="up()" :style="{background:upBtn?'#1890ff':'#a5ccf1'}">上一题</div>
        <div class="right" @click="down()" :style="{background:downBtn?'#1890ff':'#a5ccf1'}">下一题</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data:[
          {
            index:0,title:'你认为压力在你的学习生活中有什么作用?',option1:'正面影响,会为学习带来动力',option2:'负面影响,会为学习带来动力',
            option3:'较为负面影响,会影响情绪',option4:'完全负面影响,会使我无心向学',option5:'其它'
          },
          {
            index:1,title:'您认为身体健康重要吗?',option1:'非常重要',option2:'一般重要',
            option3:'不重要',option4:'没想过'
          },
          {
            index:2,title:'您对自己的身形，容貌是否满意？',option1:'非常满意',option2:'满意',
            option3:'无所谓',option4:'不满意',option5:'很不满意'
          },
          {
            index:3,title:'您认为自己在与别人的沟通交往上是否存在障碍?',option1:'有很大障碍',option2:'有时有障碍',
            option3:'比较少',option4:'无',option5:''
          },
          {
            index:4,title:'如果您单相思异性朋友，是否会有压力?',option1:'会有很大压力',option2:'有一定压力',
            option3:'压力较小',option4:'没有压力',option5:''
          },
          {
            index:5,title:'您对自己的前途感到困惑和担忧过吗?',option1:'经常',option2:'偶尔',
            option3:'很少',option4:'无',option5:''
          },
          {
            index:6,title:'您会采用何种方式应对压力?',option1:'转移',option2:'发泄',
            option3:'压抑',option4:'自然调整',option5:''
          },
          
      ],
      index:0,
      upBtn: false,
      downBtn: true,
      radios: ['0','0','0','0','0','0','0',]
    }
  },
  methods:{
    back() {
        this.$router.go(-1);
    },
    up() {
        if(this.index == 1) {
            this.index = 0;
            this.upBtn = false;
        }else {
            this.index--;
            this.downBtn = true;
        }
    },
    down() {
        if(this.index == 5) {
            this.index = 6;
            this.downBtn = false;
        }else {
            this.index++;
            this.upBtn = true;
        }
    },
    submit() {
        let num = 0;
        this.radios.forEach(item => {
            if (item == 0) {
                num ++;
            }
        });
        if (num > 0) {
            this.$dialog.alert({
            message: '还有'+ num + '题未做，请继续答题'
            }).then(() => {
            // on close
            });
        } else{
            this.$dialog.confirm({
            message: '确定要提交吗'
            }).then(() => {
            // on confirm
            
            setTimeout(() => {
                this.$router.go(-1);
                console.log(23);
                
            }, 0);
            // console.log(111);
            this.$toast('提交成功');
            // this.$router.go(-1);
            }).catch(() => {
            // on cancel
            
            });
        }
    }
  }
}
</script>
<style scoped>
.testing{
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
    background: #1890ff;
    color: #fff;
}
.head >>> .van-icon{
    position: absolute;
    left: 7px;
    top: 10px;
    font-size: 22px;
}
.content{
  height: calc(100% - 85px);
}
.title{
  text-align: left;
  padding-left: 10px;
  color: #807d7d;
}
.topic{
    margin-top: 45px;
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding-left: 10px;
    color: #757373;
}
.topic span{
    color: red;
    position: absolute;
    right: 10px;
}
.content .title{

}
.content .answer{
    text-align: left;
    padding: 0 10px;
    margin-top: 10px;
}
.answer span{
    display: inline-block;
    height: 30px;
    width: 30px;
    border: 1px solid #1890ff;
    border-radius: 25px;
    line-height: 30px;
    text-align: center;
    top: 15px;
    left: 0;
    position: absolute;
}
.answer p{
    display:inline-block;
    width: 300px;
    margin-left: 45px;
}
.bottom{
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    height: 45px;
    background: #1890ff
}
.left,.right{
    width: 50%;
    float: left;
    line-height: 45px;
    color: #fff;
}
.left{
    width: calc(50% - 1px);
    border-right: 1px solid #fff;
}
.testing >>> .van-radio{
    margin: 25px 10px;
    text-align: left;
}
</style>
