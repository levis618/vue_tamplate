import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 解决.3s延时
import fastClick from 'fastclick'
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
