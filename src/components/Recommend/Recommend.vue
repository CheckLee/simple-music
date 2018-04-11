<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content">
      <div>
        <div class="swiper-container">
          <swiper></swiper>
        </div>
        <section class="panel">
          <div class="panel-item" @click="handleEnterFM">
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
        
        <div v-for="item in orderList" :is="item.name" :key="item.order"></div>
        <div class="justify-order-wrapper">
          <div class="justify-order-button" @click="justifyOrder">调整栏目顺序</div>
        </div>
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
  import { mapActions, mapMutations } from 'vuex'

  export default {
    name: "recommend",
    components: {
      Swiper, RecommendList, Broadcast, Scroll, LatestMusic, SelectedColumns, Radio
    },
    computed: {
      orderList: {
        get() {
          return this.$store.state.recommendOrderList
        }
      }
    },
    methods: {
      ...mapMutations({
        setJustifyOrder: 'SET_JUSTIFY_ORDER'
      }),
      ...mapActions([
        'enterFM'
      ]),
      justifyOrder() {
        this.setJustifyOrder()
      },
      handleEnterFM() {
        // 点击进入私人FM以后，先设置当前播放器为FM，然后拉取数据
        this.enterFM()
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "./Recommend.styl"
</style>
