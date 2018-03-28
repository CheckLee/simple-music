<template>
	<div class="found-music">
    <div class="header">
      <div class="search">
        <i class="material-icons md-56 md-light">mic</i>
        <div class="panel">
          <i class="material-icons md-28 md-dark md-inactive" style="height: 14px">search</i>
          <input class="input" type="text" placeholder="搜索音乐、歌词、电台">
        </div>
        <i class="material-icons md-56 md-light">equalizer</i>
      </div>
    </div>
    <tab @judgeType="selectType"></tab>
    <transition :name="slideType">
      <router-view style="height: 100%;"></router-view>
    </transition>
  </div>
</template>

<script>
  import Tab from 'base/Tab/Tab'

  export default {
    name: "found-music",
    data() {
      return {
        slideType: 'slide-left'
      }
    },
    methods: {
      selectType(type) {
        this.slideType = (type === 'left') ? 'slide-left' : 'slide-right'
      }
    },
    components: {
      Tab
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./FoundMusic.styl"
</style>
