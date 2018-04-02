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
    <tab @judgeType="selectType" class="tab"></tab>
    <transition :name="slideType">
      <keep-alive>
        <router-view class="page"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import Tab from 'base/Tab/Tab'
  import Scroll from 'base/Scroll/Scroll'

  export default {
    name: "found-music",
    data() {
      return {
        slideType: 'slide-left',
        activeRoute: 'recommend'
      }
    },
    watch: {
      $route(to, from) {
        // console.log(to)
        if (to.matched[0].path === "/foundmusic") {
          if (to.matched[1]) {
            this.activeRoute = to.name.toLowerCase()
          } else {
            this.$router.push(`/foundmusic/${this.activeRoute}`)
          }
        }
      }
    },
    methods: {
      selectType(type) {
        this.slideType = (type === 'left') ? 'slide-left' : 'slide-right'
      }
    },
    components: {
      Tab, Scroll
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./FoundMusic.styl"
  @import "~assets/stylus/variable.styl"
</style>
