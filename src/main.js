import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueVideoPlayer from 'vue-video-player'
import VueLazyload from 'vue-lazyload'
import VueTouch from 'vue-touch'
import Velocity from 'velocity-animate'
import lodash from 'lodash'
import VeeValidate from 'vee-validate'
import 'babel-polyfill'
import 'assets/stylus/index.styl'
import store from './store'

// 取消点击延时300ms效果
const fastclick = require('../static/js/fastclick')
fastclick.attach(document.body)

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  interval: 200,
  taps: 2
})
VueTouch.registerCustomEvent('tripletap', {
  type: 'tap',
  interval: 200,
  taps: 3
})
Vue.use(VueTouch)
Vue.use(VueTouch, {name: 'v-touch'})

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_unloadimg.png',
  loading: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_unloadimg.png',
  attempt: 1
})

// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueVideoPlayer)

Vue.use(VeeValidate)

Vue.prototype._ = lodash

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
