<template>
	<div class="song-list">
    <scroll ref="scroll"
            :pullUpLoad="pullUpLoadObj"
            @pullingUp="onPullingUp"
            class="song-list-content">
      <div>
        <div class="header">
          <div class="pic"></div>
          <div class="desc">
            <div class="superior">
              <span class="text">精品歌单</span>
              <i class="material-icons right">navigate_next</i>
            </div>
            <span class="title">华语歌里的宇宙丨我们飞翔太空</span>
            <span class="sub-title">来吧，跟随音律一起在太空中遨游</span>
          </div>
        </div>
        <div class="tab">
          <div class="all">
            <span>全部歌单</span>
            <i class="material-icons right">navigate_next</i>
          </div>
          <div class="tips">
            <span class="tip">{{ this.tips[0].name }}</span>丨<span class="tip">{{ this.tips[1].name }}</span>丨<span class="tip">{{ this.tips[2].name }}</span>
          </div>
        </div>
        <div class="content">
          <song-list-frame v-for="item in items" class="item" :key="item.index"></song-list-frame>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'base/Scroll/Scroll'
  import SongListFrame from './SongListFrame/SongListFrame'
  export default {
    name: "song-list",
    data() {
      return {
        tips: [{
          name: '日本',
          path: 'japan'
        }, {
          name: 'R&B/Soul',
          path: 'rs'
        }, {
          name: '电子',
          path: 'electronic'
        }],
        // 模拟歌单数据
        items: [],
        itemIndex: 0,
        pullUpLoad: true,
        pullUpLoadThreshold: 100,
        pullUpLoadMoreTxt: '加载更多',
        pullUpLoadNoMoreTxt: '没有更多数据'
      }
    },
    created() {
      for (let i = 0; i < 20; i++) {
        this.items.push({
          name: `item ${this.itemIndex++}`,
          index: this.itemIndex
        })
      }
    },
    computed: {
      pullUpLoadObj() {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {
            more: this.pullUpLoadMoreTxt,
            noMore: this.pullUpLoadNoMoreTxt
          }
        } : false
      }
    },
    watch: {
      pullUpLoadObj: {
        handler(val) {
          const scroll = this.$refs.scroll.scroll
          if (val) {
            console.log('open pull up')
            scroll.openPullUp()
          } else {
            console.log('close pull up')
            scroll.closePullUp()
          }
        },
        deep: true
      }
    },
    methods: {
      // 上拉更新数据
      onPullingUp() {
        console.log('pulling up and load data')
        setTimeout(() => {
          if (this._isDestroyed) {
            return
          }
          if (this.itemIndex < this.pullUpLoadThreshold) {
            // 如果有新数据
            for (let i = 0; i < 20; i++) {
              this.items.push({
                name: `item ${this.itemIndex++}`,
                index: this.itemIndex
              })
            }
            this.$refs.scroll.forceUpdate(true)
          } else {
            this.$refs.scroll.forceUpdate()
          }
        }, 1500)
      }
    },
    components: {
      Scroll, SongListFrame
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "./SongList.styl"
</style>
