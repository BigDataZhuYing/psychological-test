<template>
  <div class="consult">
    <div class="head"><van-icon name="arrow-left" @click="back()"/>{{communications[sno].name}} </div>
    <div class="content" >
        <div v-for="(item, index) of communications[sno].communication" :key="index">
        <div class="communication-left" v-if="!item.type">
            <div class="cont-left">
                <span>{{communications[sno].name.substr(communications[sno].name.length - 2)}}</span>
            </div>
            <div class="cont-right">
                <em></em> 
                {{item.content}}
            </div>
        </div>
        <div class="communication-right" v-if="item.type">
            <div class="cont-right">
                <span>{{name.substr(name.length - 2)}}</span>
            </div>
            <div class="cont-left">
                <em></em> 
                {{item.content}}
                
            </div>
        </div>
        </div>
    </div>
    <div class="bottom">
        <input type="text" >
        <button class="send" >发送</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      opposite: '',
      name: '朱莹',
      sno: null,
      communications:{
        20160000:{
            name: '赵起超',
            communication:[
                {type: false, content: '啊啊啊啊啊啊'},//本人type:true  对方type:false
                {type: true, content: '啊啊啊啊llllll开机快快快啦啦啦啦啦啊啊'},
                {type: false, content: '啊啊啊啊啊啊'},
                {type: false, content: '啊啊啊啊啊啊噢噢噢噢哦哦哦哦哦哦时发生大幅度发'},
                {type: true, content: '啊啊啊啊啊啊'},
                {type: false, content: '啊啊啊啊啊啊'},
                {type: true, content: '啊啊啊啊llllll开机快快快啦啦啦啦啦啊啊'},
                {type: false, content: '啊啊啊啊啊啊'},
                {type: false, content: '啊啊啊啊啊啊噢噢噢噢哦哦哦哦哦哦时发生大幅度发'},
                {type: true, content: '啊啊啊啊啊啊'},
            ]
        },
        20160001:{
            name: '王杰',
            communication:[
                {type: false, content: '啊啊啊啊啊啊'},
                {type: true, content: '啊啊啦啦啦啦啊啊'},
                {type: false, content: '啊啊啊啊啊啊'},
                {type: false, content: 'wwwww'},
                {type: true, content: '啊啊啊啊啊啊'},
                {type: false, content: '啊啊啊啊啊啊'},
                {type: true, content: '啊啊啊啊llllll开机快快快啦啦啦啦啦啊啊'},
                {type: false, content: '啊啊啊啊啊啊'},
                {type: false, content: '啊啊啊啊啊啊噢噢噢噢哦哦哦哦哦哦时发生大幅度发'},
                {type: true, content: '2222'},
            ]
        },
        20160002:{
            name: '苏大荣',
            communication:[
                {type: false, content: '啊啊啊啊啊啊'},
                {type: true, content: '啊啊啊啊555555啦啦啦啦啊啊'},
                {type: false, content: '啊啊啊啊啊啊'},
                {type: false, content: '啊啊啊啊啊啊噢噢噢噢哦哦哦哦哦哦时发生大幅度发'},
                {type: true, content: '啊啊啊啊啊啊'},
                {type: false, content: '啊啊啊啊啊啊'},
                {type: true, content: '啊啊啊啊llllll开机快快快啦啦啦啦啦啊啊'},
                {type: false, content: '啊啊啊啊啊啊'},
                {type: false, content: '啊啊啊啊啊啊噢噢噢噢哦哦哦哦哦哦时发生大幅度发'},
                {type: true, content: '呜呜呜呜~'},
            ]
        },
        20160003:{
            name: '快快快',
            communication:[
                
            ]
        },
        20160004:{
            name: '宋姗姗',
            communication:[
                
            ]
        },
        20160005:{
            name: '刘某某',
            communication:[
                
            ]
        },
        20160006:{
            name: '李一样',
            communication:[
                
            ]
        },
        20160007:{
            name: '元某',
            communication:[
                
            ]
        }

          
      }
    }
  },
  created(){
      this.opposite = this.$route.params.name;
      this.sno = this.$route.params.sno;
  },
  methods: {
    back() {
        this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
.consult{
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
    background: #1890ff;
    line-height: 45px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
}
.head >>> .van-icon{
    position: absolute;
    left: 7px;
    top: 10px;
    font-size: 22px;
}
.content{
    height: calc(100% - 125px);
    margin-top: 45px;
    padding-top: 20px;
    overflow: scroll;
    background: #e5e5e5;
}
.content .communication-left{
    text-align: left;
    margin-bottom: 10px;
}
.content .communication-right{
    text-align: right;
    margin-bottom: 10px;
}
.communication-left .cont-left{
  float: left;
  height: 40px;
  width: 40px;
  margin-top: 5px;
  margin-left: 15px;
  display: inline-block;
}
.communication-left .cont-left span{
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background: #1890ff;
  line-height: 40px;
  font-size: 15px;
  color: #fff;
  text-align: center;
}
.communication-left .cont-right{
  padding-left: 15px;
  max-width: calc(100% - 140px);
  text-align: left;
  margin-top: 6px;
  display: inline-block;
  padding: 10px;
  margin-left: 20px;
  background: #fff;
  border-radius: 10px;
}
.communication-left .cont-right em{
    display:inline-block; 
    border-width:11px; 
    top:10px; 
    left:-20px;
    border-style:solid dashed dashed; 
    border-color:transparent #fff transparent transparent;
    font-size:0; 
    line-height:0;
    width: 22px;
    margin-left: -50px;
}
.communication-right .cont-right{
  float: right;
  height: 40px;
  width: 40px;
  margin-top: 5px;
  margin-right: 15px;
  display: inline-block;
}
.communication-right .cont-right span{
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background: #1890ff;
  line-height: 40px;
  font-size: 15px;
  color: #fff;
  text-align: center;
}
.communication-right .cont-left{
  padding-right: 15px;
  max-width: calc(100% - 140px);
  text-align: left;
  margin-top: 6px;
  display: inline-block;
  padding: 10px;
  margin-right: 20px;
  background: #1890ff;
  border-radius: 10px;
  color: #fff;
}
.communication-right .cont-left em{
    display:inline-block; 
    border-width:11px; 
    /* position:absolute;  */
    top:10px; 
    right:-20px;
    border-style:solid dashed dashed; 
    border-color:transparent transparent transparent #09F;
    font-size:0; 
    line-height:0;
    margin-right: -50px;
    width: 22px;
    float: right;
}
.bottom {
  height: 50px;
  padding-top: 10px;
  line-height: 40px;
  width: 100%;
  background: #e5e5e5;
}
.bottom  input{
  background: #e5e5e5;
  border: none;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  width: calc(100% - 80px)
 
}

.bottom  .send{
  width: 65px;
  height: 40px;
  background: #1890ff;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  color: #fff;
}

</style>