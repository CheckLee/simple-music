<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content">
      <div>
        <div class="swiper-container">
          <swiper></swiper>
        </div>
        <section class="panel">
          <div class="panel-item">
            <div class="icon-wrapper personal-FM">
              <i class="material-icons theme">radio</i>
            </div>
            <div class="text">私人FM</div>
          </div>
          <div class="panel-item">
            <div class="icon-wrapper daily-recommend">
              <i class="material-icons theme">event_note</i>
            </div>
            <div class="text">每日歌曲推荐</div>
          </div>
          <div class="panel-item">
            <div class="icon-wrapper hotmusic-rank">
              <i class="material-icons theme">assessment</i>
            </div>
            <div class="text">云音乐热歌榜</div>
          </div>
        </section>
        <recommend-list></recommend-list>
        <broadcast></broadcast>
        <latest-music></latest-music>
        <selected-columns></selected-columns>
        <radio></radio>
        <div class="justify-order-wrapper">
          <div class="justify-order">调整栏目顺序</div>
        </div>
        <div class="blank"></div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Swiper from 'base/Swiper/Swiper'
  import RecommendList from './RecommendList/RecommendList'
  import Broadcast from './Broadcast/Broadcast'
  import Scroll from 'base/Scroll/Scroll'
  import LatestMusic from './LatestMusic/LatestMusic'
  import SelectedColumns from './SelectedColumn/SelectedColumns'
  import Radio from './Radio/Radio'

  export default {
    name: "recommend",
    components: {
      Swiper, RecommendList, Broadcast, Scroll, LatestMusic, SelectedColumns, Radio
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "./Recommend.styl"
</style>
