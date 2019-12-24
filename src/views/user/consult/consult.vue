<template>
  <div class="consult">
    <div>
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          :clearable="true"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <div class="contant">
      <div class="cont-item" v-for="(item, index) of dataConfig" :key="index" @click="topage(index)" >
        <div class="cont-left">
          <span>{{item.head}}</span>
        </div>
        <div class="cont-right">
          <span>{{item.name}}</span>
          <span>{{item.content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: null,
      dataConfig:[
        {head: '', name: '超', content: 'ffffff'},
        {head: '', name: '王杰', content: 'hdfuhjh'},
        {head: '', name: '就换个号', content: 'dfsddddd'},
        {head: '', name: '空间很大声', content: 'kyuughhhh'},
      ]
    }
  },
  methods: {
    onSearch() {

    },
    onCancel() {

    },
    topage(i) {
      alert(i);
    }
  }
}
</script>
<style scoped>
.consult{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.contant{
  margin-top: 10px;
  background: #fff;
}
.cont-item{
  border-bottom: 1px solid #e9e9e9;
  height: 50px;
  padding: 5px 0;
}
.cont-left{
  float: left;
  height: 40px;
  width: 40px;
  margin-top: 5px;
  margin-left: 15px;
}
.cont-left span{
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background: #1890ff;
}
.cont-right{
  float: left;
  height: 50px;
  padding-left: 15px;
}
.cont-right span{
  display: block;
  height: 25px;
  line-height: 25px;
  text-align: left;
}
.cont-right span:nth-child(2){
  color: #969799;
  font-size: 14px;
}
.selected{
  background: #f2f3f5;
}

</style>