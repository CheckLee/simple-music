<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="bottom-wrapper">
      <bottom-panel></bottom-panel>
    </div>
    <transition name="pullup">
      <justify-order v-if="isJustifyOrder" class="justify-order"></justify-order>
    </transition>
  </div>
</template>

<script>
  import BottomPanel from 'base/BottomPanel/BottomPanel'
  import JustifyOrder from 'components/JustifyOrder/JustifyOrder'
  
  export default {
    name: 'App',
    components: {
      BottomPanel, JustifyOrder
    },
    computed: {
      isJustifyOrder() {
        return this.$store.state.isJustifyOrder
      }
    }
  }
</script>

<style>
  #app {
    z-index: 0;
    height: 100%;
    width: 100%;
  }
  .bottom-wrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 112px;
    z-index: 1;
  }
  .pullup-enter-active, .pullup-leave-active {
    transition: all 0.4s
  }
  .pullup-enter, .pullup-leave-to {
    transform: translate3d(0, 100%, 0);
  }
  .swiper-pagination-bullet-imgview{
    width: 8px;
    height: 8px;
    margin: 0 5px;
    display: inline-block;
    border-radius: 100%;
    background: white;
    opacity: 0.2;

  }
  .swiper-pagination-bullet-imgview-active {
    opacity: 1;
  }
  .swiper-lazy-preloader-imgview {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
  }
  .img-view-swiper {
    height: 100%;
  }
  .img-view-slide {
    height: 100%;
    overflow: auto;
  }
</style>
