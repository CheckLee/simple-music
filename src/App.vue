<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="bottom-wrapper">
      <bottom-panel></bottom-panel>
    </div>
  </div>
</template>

<script>
  import BottomPanel from 'base/BottomPanel/BottomPanel'
  export default {
    name: 'App',
    components: {
      BottomPanel
    }
  }
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
  }
  .bottom-wrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 112px;
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
