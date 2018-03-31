import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import 'assets/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
