<template>
  <!-- 过渡动画 -->
    <div class="img-view" @click="bigImg">
      <!-- 遮罩层 -->
      <div v-show="show" class="img-layer"></div>
      <transition name="fade">
        <!--<img v-show="show" :src="imgSrc">-->
        <div v-show="show" class="swiper-container">
          <swiper :options="swiperOption">
            <swiper-slide v-for="slide in swiperSlides" :key="slide">I'm Slide {{ slide }}</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </transition>
    </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    mounted() {
      setInterval(() => {
        console.log('simulate async data')
        if (this.swiperSlides.length < 10) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 3000)
    },
    props: ['imgSrc', 'show'],
    methods: {
      bigImg() {
        // 发送事件
        this.$emit('clickit')
      }
    },
    components: {
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
    transform: scale(0.5) translate3d(calc(-50% + 200px), calc(-100% - 300px), 0);
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
  }

  /*不限制图片大小，实现居中*/
  /*.img-view img {*/
    /*max-width: 100%;*/
    /*display: block;*/
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    /*!*top: 400px;*!*/
    /*margin: auto;*/
    /*z-index: 1000;*/
  /*}*/
  .img-view .swiper-container {
    height: 400px;
    width: 750px;
    overflow: hidden;
    background: #ccc;
    /*top: 400px;*/
  }
</style>
