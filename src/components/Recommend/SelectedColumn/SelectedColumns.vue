<template>
  <div class="selected-columns">
    <column-frame :clickable="clickable" :title="title" :path="path">
      <div class="content">
        <div class="item">
          <div class="left">
            <div class="title">
              <div class="tip">专栏</div>
              <div class="text">《歌手》突围赛：姜还是老的辣 老歌唱出新高度</div>
            </div>
            <div class="read">阅读 23456</div>
          </div>
          <div class="right">
            <div class="pic"></div>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <div class="title">
              <div class="tip">专栏</div>
              <div class="text">《歌手》突围赛：姜还是老的辣 老歌唱出新高度</div>
            </div>
            <div class="read">阅读 23456</div>
          </div>
          <div class="right">
            <div class="pic"></div>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <div class="title">
              <div class="tip">专栏</div>
              <div class="text">《歌手》突围赛：姜还是老的辣 老歌唱出新高度</div>
            </div>
            <div class="read">阅读 23456</div>
          </div>
          <div class="right">
            <div class="pic"></div>
          </div>
        </div>
      </div>
    </column-frame>
  </div>
</template>

<script>
  import ColumnFrame from 'base/ColumnFrame/ColumnFrame'
  export default {
    name: "selected-columns",
    data() {
      return {
        title: '精选专栏',
        clickable: true,
        path: '.'
      }
    },
    components: {
      ColumnFrame
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "SelectedColumns.styl"
</style>
