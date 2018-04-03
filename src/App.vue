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
</style>
