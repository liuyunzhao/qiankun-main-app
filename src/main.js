import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#appjizuo')
/**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   * 这里activeRule的命名可任意，只要本项目(vue-jizuo)中路由跳转是以/appfu开始就会命中，并通过entry进入最终会重新组装路由，即entry+跳转路由，所以这里activeRule需要和子应用中baseUrl一致
   */

registerMicroApps([
  {
    name: 'vue-fu',
    entry: '//localhost:7101',
    container: '#fu',
    activeRule: '/appfu'
  },
  {
    name: 'vue-zi',
    entry: '//localhost:7102',
    container: '#zi',
    activeRule: '#/zi'
  }
  // {
  //   name: 'vue-fu', // app name registered
  //   entry: '//zhongguo.com:7100',
  //   container: '#fu',
  //   activeRule: '/fu'
  // },
  // {
  //   name: 'vue-zi',
  //   entry: { scripts: ['//zhongguo.com:7102/main.js'] },
  //   container: '#zi',
  //   activeRule: '/zi'
  // }

])

start()

new Vue({ // 放在start前或者后都可以
  router,
  store,
  render: h => h(App)
}).$mount('#appjizuo')
