import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: resolve =>require(['../components/HelloWorld'],resolve)
    // },
    {
      path: '/',
      name: 'login',
      component: resolve =>require(['../views/login/login'],resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve =>require(['../views/login/login'],resolve)
    },
    {
      path: '/user',
      name: 'user',
      component: resolve =>require(['../views/user/homeIndex'],resolve),
      children: [
        {
          path: 'test',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'test',
          component: resolve =>require(['../views/user/test/test'],resolve),
        },
        {
          path: 'myset',
          name: 'myset',
          component: resolve =>require(['../views/user/myset/myset'],resolve),
        },
        {
          path: 'homeIndex',

          name: 'homeIndex',
          component: resolve =>require(['../views/user/home/home'],resolve),
        },
        {
          path: 'consult',
          name: 'consult',
          component: resolve =>require(['../views/user/consult/consult'],resolve),
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: resolve =>require(['../views/user/statistics/statistics'],resolve),
        }
      ]
    }
  ]
})
