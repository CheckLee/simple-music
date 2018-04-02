<template>
	<div class="swiper-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-item" v-for="item in items" :key="item.index">{{ item }}</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  
  export default {
    name: "",
    data() {
      return {
        items: ["Slide 1", "Slide 2", "Slide 3"],
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    components: {
      swiper, swiperSlide
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-pagination-bullet-custom
    width: 20px
    height: 20px
    text-align: center
    line-height: 20px
    font-size: 12px
    color: #000
    opacity: 1
    background: rgba(0, 0, 0, 0.2)
  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active
    color: #fff
    background: #007aff
  .swiper-item
    width: 375px
</style>
