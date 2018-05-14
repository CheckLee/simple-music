<template>
  <div class="broadcast">
    <column-frame :clickable="clickable" :title="title" :path="path">
      <div class="content">
        <div class="column top-column">
          <div class="item">
            <div class="pic">
              <div class="icon-wrapper">
                <i class="material-icons">slideshow</i>
              </div>
            </div>
            <div class="text-wrapper">
              <div class="text">华语/百首写给前任的歌，让你百感交集啊啊啊啊</div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="icon-wrapper">
                <i class="material-icons">slideshow</i>
              </div>
            </div>
            <div class="text-wrapper">
              <div class="text">华语/百首写给前任的歌，让你百感交集啊啊啊啊</div>
            </div>
          </div>
        </div>
        <div class="column bottom-column">
          <div class="item">
            <div class="pic">
              <div class="icon-wrapper">
                <i class="material-icons">slideshow</i>
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
    name: "broadcast",
    data() {
      return {
        clickable: false,
        title: '独家放送',
        path: 'broadcast'
      }
    },
    components: {
      ColumnFrame
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "Broadcast.styl"
</style>
