<template>
  <div v-show="show" class="img-view" :style="viewerStyle">
    <v-touch v-on:doubletap="_doubleTap" v-on:tripletap="_tripleTap" v-on:tap="_singleTap" class="swiper-touch-contanier">
      <div v-show="show" class="img-layer">
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
      <transition
        v-on:before-enter="_beforeEnter"
        v-on:enter="_enter">
        <div v-if="show" class="swiper-container">
          <swiper :options="swiperOption" class="img-view-swiper">
            <swiper-slide v-for="slide in imgArr" :key="slide.index" class="img-view-slide">
              <div class="swiper-zoom-container">
                <img :data-src="slide.url" class="swiper-lazy" :class="slide.type">
              </div>
              <div class="swiper-lazy-preloader-imgview">
                <inf-circle-loader class="inf-preloader" size="large" color="white"></inf-circle-loader>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </transition>
    </v-touch>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import InfCircleLoader from "../Loader/InfCircleLoader";
  export default {
    name: 'img-previewer',
    data() {
      return {
        emitFlag: false,
        deletaX: 0,
        deletaY: 0,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            bulletClass : 'swiper-pagination-bullet-imgview',
            bulletActiveClass: 'swiper-pagination-bullet-imgview-active',
          },
          lazy: {
            loadPrevNext: true,
            preloaderClass: 'swiper-lazy-preloader-imgview',
          },
          zoom: true,
          initialSlide : 0,
          observer:true,
        }
      }
    },
    watch: {
      index(val, oldVal) {
        this.swiperOption.initialSlide = val
      }
    },
    props: {
      imgArr: {
        type: Array
      },
      show: {
        type: Boolean
      },
      scale: {
        type: Number
      },
      offsetX: {
        type: Number
      },
      offsetY: {
        type: Number
      },
      midX: {
        type: Number
      },
      midY: {
        type: Number
      },
      width: {
        type: Number
      },
      height: {
        type: Number
      },
      index: {
        type: Number
      },
      startY: {
        type: Number,
        default: 0
      }
    },
    computed: {
      viewerStyle() {
        return {
          top: `${this.startY}px`
        }
      }
    },
    methods: {
      _singleTap() {
        this.emitFlag = true
        setTimeout(() => {
          if (this.emitFlag) {
            this.$emit('clickit')
          }
        }, 200)
      },
      _doubleTap() {
        this.emitFlag = false
      },
      _tripleTap() {
        this.emitFlag = false
      },
      _beforeEnter(el) {
        let screenWidth = document.documentElement.offsetWidth || document.body.offsetWidth,
          screenHeight = document.documentElement.offsetHeight || document.body.offsetHeight,
          scrollX = document.documentElement.scrollTop || document.body.scrollTop
        this.deletaX = -( this.midX - (this.offsetX + this.width/2) )/this.scale
        this.deletaY = -( this.midY - (this.offsetY + this.height/2) )/this.scale
        console.log(this.midY, this.offsetY, this.height/2, this.deletaY, this.scale)
        Velocity(el, { scaleX: this.scale, scaleY: this.scale}, { duration: 0 })
        Velocity(el, { translateX: `${this.deletaX}px`, translateY: `${this.deletaY}px`}, { duration: 0 })
      },
      _enter(el, done) {
        Velocity(el, {  translateX: '0px', translateY: '0px'}, { duration: 250, easing: 'ease' })
        Velocity(el, { scaleX: 1, scaleY: 1 }, { duration: 250, easing: 'ease' }, { complete: done })
      }
    },
    components: {
      InfCircleLoader,
      swiper, swiperSlide
    }
  }
</script>

<style scoped>
  /*.fade-enter-active,*/
  /*.fade-leave-active{*/
    /*transition: all .5s ease;*/
  /*}*/

  /*.fade-leave,*/
  /*.fade-enter-active {*/
    /*transform: scale(1, 1)*/
  /*}*/

  /*.fade-enter,*/
  /*.fade-leave-active{*/
    /*transform: scale(0.5, 0.5) translate3d(calc(-50% + 200px), -700px, 0);*/
  /*}*/


  .img-view {
    position: fixed;
    left: 0;
    z-index: 2000;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /*遮罩层样式*/
  .img-view .img-layer {
    position: absolute;
    z-index: 1;
    left: 0;
    background: rgba(0, 0, 0, 1);
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .swiper-touch-contanier {
    width: 750px;
    height: 100%;
  }

  .img-view .swiper-container {
    width: 750px;
    height: 100%;
  }

  .img-view .swiper-container .swiper-zoom-container img.normal {
    width: inherit;
    object-fit: fill;
  }

  .img-view .swiper-container .swiper-zoom-container img.long {
    width: inherit;
    max-height: none;
    object-fit: fill;
    position: absolute;
    top: 0;
    transform: translateY(0);
    left: 0;
  }

  .swiper-pagination {
    align-self: flex-end;
  }
</style>
