<template>
  <!-- 过渡动画 -->
    <div class="img-view" @click="bigImg">
      <!-- 遮罩层 -->
      <div v-show="show" class="img-layer">
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
      <transition name="fade">
        <div v-show="show" class="swiper-container">
          <swiper :options="swiperOption">
            <swiper-slide v-for="slide in imgArr" :key="slide.alt" class="img-view-slide">
              <img :data-src="slide.url" alt="slide.alt" class="swiper-lazy">
              <div class="swiper-lazy-preloader-imgview">
                <inf-circle-loader class="inf-preloader" size="large" color="white"></inf-circle-loader>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </transition>
    </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import InfCircleLoader from "../Loader/InfCircleLoader";
  export default {
    data() {
      return {
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
        }
      }
    },
    mounted() {
      setInterval(() => {
        console.log('simulate async data')
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
    transform: scale(1)
  }

  .fade-enter,
  .fade-leave-active{
    transform: scale(0.5) translate3d(calc(-50% + 200px), -700px, 0);
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

  .img-view .swiper-container {
    width: 750px;
  }

  .img-view .swiper-container img {
    width: inherit;
    object-fit: fill;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .swiper-pagination {
    align-self: flex-end;
  }

</style>
