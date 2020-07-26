import Vue from 'vue'
import App from './App.vue'
// 引入路由
import * as filters from './filter/filter'
import router from './router/router'
Vue.config.productionTip = false

// 全局注册filter
console.log(filters)
Object.keys(filters).forEach((item) => Vue.filter(item, filters[item]))
console.log('136')
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
