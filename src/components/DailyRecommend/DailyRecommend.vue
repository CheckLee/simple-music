<template>
	<div class="daily-recommend">
    <div class="header">
      <i class="material-icons back" @click="back">chevron_left</i>
      <span class="title">每日推荐</span>
      <i class="material-icons info">info_outline</i>
    </div>
    <scroll class="daily-recommend-content"
            :listen-scroll="listenScroll"
            :probe-type="probeType"
            :data="recommend"
            ref="dailyRecommendContent"
            @scroll="scroll">
      <div>
        <div class="ad-wrapper">
          <img src="" alt="ad" class="ad-pic">
          <div class="tip">
            <i class="material-icons icon">lightbulb_outline</i>
            <span class="text">根据你的音乐口味生成，每天6:00更新</span>
          </div>
        </div>
        <section class="panel">
          <i class="material-icons play-icon">play_circle_outline</i>
          <span class="play-text">播放全部</span>
          <div class="multi-select">
            <i class="material-icons multi-icon">list</i>
            <span class="multi-text">多选</span>
          </div>
        </section>
        <section class="recommend-list-wrapper" v-if="recommend">
          <ul class="recommend-list">
            <li class="recommend-item"
                is="DailyRecommendItem"
                v-for="item in recommend"
                :item="item"
                :key="item.id"></li>
          </ul>
        </section>
      </div>
    </scroll>
    <section class="panel-fixed" v-show="isPanelShow">
      <i class="material-icons play-icon">play_circle_outline</i>
      <span class="play-text">播放全部</span>
      <div class="multi-select">
        <i class="material-icons multi-icon">list</i>
        <span class="multi-text">多选</span>
      </div>
    </section>
  </div>
</template>

<script>
  const IMG_HEIGHT = 188 / 667 * window.innerHeight
  
  import DailyRecommendItem from './DailyRecommendItem/DailyRecommendItem'
  import Scroll from 'base/Scroll/Scroll'
  import { mapMutations } from 'vuex'
  import api from 'api/song'
  export default {
    name: "daily-recommend",
    data() {
      return {
        recommend: [],
        // 顶部固定panel显示
        isPanelShow: false,
        // 当前滚动点
        scrollY: -1
      }
    },
    created() {
      // 初始化
      this.probeType = 3
      this.listenScroll = true
      // 获取值
      api.GetDailyRecommend().then((res) => {
        if (res.data.code === 200) {
          this.recommend = res.data.recommend
        }
      })
    },
    methods: {
      ...mapMutations({
        setDailyRecommend: 'SET_DAILY_RECOMMEND'
      }),
      back() {
        this.setDailyRecommend()
      },
      scroll(pos) {
        this.scrollY = pos.y
      }
    },
    watch: {
      scrollY(newY) {
        if (-newY > IMG_HEIGHT) {
          this.isPanelShow = true
        }
        else {
          this.isPanelShow = false
        }
      }
    },
    components: {
      Scroll, DailyRecommendItem
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "DailyRecommend.styl"
</style>

