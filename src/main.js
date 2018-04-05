import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastclick from 'fastclick'
import 'babel-polyfill'
import 'assets/stylus/index.styl'
import store from './store'

// 取消点击延时300ms效果
fastclick.attach(document.body)

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
