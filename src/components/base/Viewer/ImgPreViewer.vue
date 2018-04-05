<template>
  <div v-show="show" class="img-view" >
    <v-touch v-on:doubletap="_doubleTap" v-on:tripletap="_tripleTap" v-on:tap="_singleTap" class="swiper-touch-contanier">
      <div v-show="show" class="img-layer">
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
      <transition name="fade">
        <div v-if="show" class="swiper-container">
          <swiper :options="swiperOption" class="img-view-swiper">
            <swiper-slide v-for="slide in imgArr" :key="slide.alt" class="img-view-slide">
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
          zoom: true
        }
      }
    },
    mounted() {
      setInterval(() => {
        // console.log('simulate async data')
        // if (this.swiperSlides.length < 10) {
        //   this.swiperSlides.push(this.swiperSlides.length + 1)
        // }
      }, 3000)
    },
    props: ['imgArr', 'show'],
    methods: {
      bigImg() {
        // 发送事件
        this.$emit('clickit')
      },
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
      }
    },
    components: {
      InfCircleLoader,
      swiper, swiperSlide
    }
  }
</script>
<style scoped>
  /*动画*/
  .fade-enter-active,
  .fade-leave-active{
    transition: all .5s ease;
  }

  .fade-leave,
  .fade-enter-active {
    transform: scale(1, 1)
  }

  .fade-enter,
  .fade-leave-active{
    transform: scale(0.5, 0.5) translate3d(calc(-50% + 200px), -700px, 0);
  }


  /* bigimg */

  .img-view {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /*遮罩层样式*/
  .img-view .img-layer {
    position: fixed;
    z-index: 1;
    top: 0;
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

  .img-view .swiper-container .swiper-zoom-container img {
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
