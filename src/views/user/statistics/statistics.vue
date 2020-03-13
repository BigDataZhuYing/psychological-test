<template>
<div class="statistics">
  <div class="content">
    <div class="header">统计</div>
    <div class="myprocess" v-if="userType == 2">
      <p class="test-result-name">个人测评成绩结果展示</p>
      <div v-for="(item, index) of testResult" :key="index"  class="test-result">
        <span style="width:40px;">{{item.result}}分</span>
        <span class="outside">
          <div :style="{'background':'#1890ff','height':'8px','border-radius': '4px','width':item.result + '%'}"></div>
        </span>
        <span>{{item.time}}</span>
      </div>
    </div>
    <div v-if="userType == 2" id="myChart" :style="{width: '100%', height: '300px'}"></div>
    <div  id="myChart1" :style="{width: '100%', height: '300px'}"></div>
    <div class="limit" v-if="userType == 2">
      <p><b> 此次测评最高分：96分</b></p>
      <p><b> 此次测评最低分：52分</b></p>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        userType: null,
        testResult: [
          {time: '2019.12.12',result: '96'},
          {time: '2019.9.12',result: '90'},
          {time: '2019.8.12',result: '95'},
          {time: '2019.5.12',result: '80'},
        ],
        time: [],
        result: [],
        allTestResult: [
          {sno: '20164111',stuName: '朱莹',result: '96'},
          {sno: '20164333',stuName: '王姐',result: '90'},
          {sno: '20168888',stuName: '赵启超',result: '95'},
          {sno: '20168955',stuName: '旺旺',result: '80'},
          {sno: '55664655',stuName: '王姐',result: '90'},
          {sno: '20168265',stuName: '赵启超',result: '76'},
          {sno: '20156955',stuName: '旺旺',result: '51'},
          {sno: '20444333',stuName: '王姐',result: '90'},
          {sno: '20162488',stuName: '赵启超',result: '89'},
          {sno: '20458955',stuName: '旺旺',result: '80'},
        ],
        allTestResultSort: [
          {value: '', name: '60分以下'},
          {value: '', name: '60-80分'},
          {value: '', name: '80-90分'},
          {value: '', name: '90-100分'},
        ]
      }
    },
    created() {
      this.userType = this.$store.state.userType;
      this.testResult.forEach(item => {
        this.time.push(item.time);
      });
      this.testResult.forEach(item => {
        this.result.push(item.result);
      });


      let result1 = 0;
      let result2 = 0;
      let result3 = 0;
      let result4 = 0;
      let allTestResultSortValue = [];
      this.allTestResult.forEach(item => {
        if (item.result <= 60) {
          result1 ++;
        } else  if (item.result <= 80) {
          result2 ++;
        } else if (item.result <= 90) {
          result3 ++;
        } else if (item.result <= 100) {
          result4 ++;
        }
      });
      allTestResultSortValue = [result1, result2, result3, result4];
      for (let i = 0; i < 4; i++) {
        this.allTestResultSort[i].value = allTestResultSortValue[i];
      }
      console.log(this.allTestResultSort);
      
    },
    mounted(){
      this.drawLine();
      this.drawLine1();
    },
    methods: {
      drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
              title: { text: '个人测评成绩趋势图'},
              tooltip: {},
              xAxis: {
                  data: this.time,
                  axisLabel: {  
                    interval:0,  
                    rotate:40  
                  },
              },
              color: '#1890ff',
              yAxis: {},
              series: [{
                  name: '',
                  type: 'line',
                  data: this.result
              }]
          });
      },
      drawLine1(){
          let myChart = this.$echarts.init(document.getElementById('myChart1'))
          myChart.setOption({
              title: { text: '学生成绩分布图-'+'2019.5.12' },
              tooltip: {},
              color: ['#7da8db', '#bccee3', '#fbe1ba', '#fec689'],
              stillShowZeroSum: false,
              series: [
                  {
                      name: '',
                      type: 'pie',
                      radius: '60%',
                      center: ['50%', '60%'],
                      data: this.allTestResultSort,
                      itemStyle: {
                          emphasis: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(128, 128, 128, 0.5)'
                          },
                          normal:{ 
                            label:{ 
                                show: true, 
                                formatter: '{b} :\n {c} ({d}%)' 
                            }, 
                            labelLine :{show:true} 
                          } 
                      }
                  }
              ]
          });
      },
    
    }
  }
</script>
<style scoped>
.statistics{
  background: #e9e9e9;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

}
.statistics .content{
  margin-top: 45px;
  height: calc(100% - 95px);
  overflow-y: scroll;
    
}
.header{
  height: 45px;
  line-height: 45px;
  background: #1890ff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.test-result-name{
    text-align:   left;
    padding-left: 5px;
    font-weight: 600;
    color: #000;
    font-size: 19px;
}
.test-result{
  height: 25px;
  margin-left: 20px;
  text-align: left;
}
.test-result span{
  display: inline-block;
  font-size: 14px;
}
.outside{
  height: 8px;
  width: 200px;
  background: #e5e5e5;
  border-radius: 4px;
}
.myprocess,
.limit{
  padding-bottom: 15px;
}
.myprocess,
.limit,
#myChart,
#myChart1{
  background: #fff;
  padding-top: 10px;
  margin-bottom: 10px;
}
</style>