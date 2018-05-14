<template>
  <div class="recommend-list">
    <column-frame :clickable="clickable" :title="title" :path="path">
      <div class="content">
        <div class="column">
          <div class="item">
            <div class="pic">
              <div class="play-count">
                <i class="material-icons">headset</i>
                <span class="count">1000万</span>
              </div>
            </div>
            <div class="text-wrapper">
              <div class="text">华语/百首写给前任的歌，让你百感交集啊啊啊啊</div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="play-count">
                <i class="material-icons">headset</i>
                <span class="count">1000万</span>
              </div>
            </div>
            <div class="text-wrapper">
              <div class="text">华语/百首写给前任的歌，让你百感交集啊啊啊啊</div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="play-count">
                <i class="material-icons">headset</i>
                <span class="count">1000万</span>
              </div>
            </div>
            <div class="text-wrapper">
              <div class="text">华语/百首写给前任的歌，让你百感交集啊啊啊啊</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="item">
            <div class="pic">
              <div class="play-count">
                <i class="material-icons">headset</i>
                <span class="count">1000万</span>
              </div>
            </div>
            <div class="text-wrapper">
              <div class="text">华语/百首写给前任的歌，让你百感交集啊啊啊啊</div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="play-count">
                <i class="material-icons">headset</i>
                <span class="count">1000万</span>
              </div>
            </div>
            <div class="text-wrapper">
              <div class="text">华语/百首写给前任的歌，让你百感交集啊啊啊啊</div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="play-count">
                <i class="material-icons">headset</i>
                <span class="count">1000万</span>
              </div>
            </div>
            <div class="text-wrapper">
              <div class="text">华语/百首写给前任的歌，让你百感交集啊啊啊啊</div>
            </div>
          </div>
        </div>
      </div>
    </column-frame>
  </div>
</template>

<script>
  import ColumnFrame from 'base/ColumnFrame/ColumnFrame'
  export default {
    name: "recommend-list",
    data() {
      return {
        clickable: true,
        title: '推荐歌单',
        path: 'recommend'
      }
    },
    components: {
      ColumnFrame
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "RecommendList.styl"
</style>
