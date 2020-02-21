// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vant/lib/index.css';
import echarts from 'echarts'
import store from './store/index'
Vue.prototype.$echarts = echarts
// vant组件
import { Button } from 'vant';
import { Tab, Tabs } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem,ImagePreview,DropdownMenu, DropdownItem } from 'vant';
import { Row, Col } from 'vant';
import { Panel } from 'vant';
import { Icon,List,Cell, CellGroup,Picker,DatetimePicker,NumberKeyboard,PasswordInput,Field,NoticeBar,Dialog,Circle ,Progress, Tag,RadioGroup,Radio, PullRefresh} from 'vant';
import { NavBar } from 'vant';
import { Toast } from 'vant';
import { Popup,Uploader } from 'vant';
import { Search } from 'vant';
Vue.use(Button).use(Tab).use(Toast).use(Tabs).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem)
.use(Row).use(Col).use(Panel).use(Icon).use(NavBar).use(List).use(Cell).use(CellGroup).use(Popup)
.use(Picker).use(DatetimePicker).use(NumberKeyboard).use(PasswordInput).use(Field).use(NoticeBar)
.use(Dialog).use(Circle).use(Progress).use(Tag).use(RadioGroup).use(Radio).use(Uploader)
.use(ImagePreview).use(DropdownMenu).use(DropdownItem).use(PullRefresh).use(Search);

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
