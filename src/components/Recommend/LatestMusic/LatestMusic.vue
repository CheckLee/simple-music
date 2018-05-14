<template>
  <div class="latest-music">
    <column-frame :clickable="clickable" :title="title" :path="path">
      <div class="content">
        <div class="column">
          <div class="item">
            <div class="pic"></div>
            <div class="text-wrapper">
              <div class="song">新歌推荐</div>
              <div class="singer">推荐合口味的新歌</div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
        
            </div>
            <div class="text-wrapper">
              <div class="song">PLAYING WITH FIRE</div>
              <div class="singer">BLACKPINK</div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
        
            </div>
            <div class="text-wrapper">
              <div class="song">PLAYING WITH FIRE</div>
              <div class="singer">BLACKPINK</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="item">
            <div class="pic">
        
            </div>
            <div class="text-wrapper">
              <div class="song">PLAYING WITH FIRE</div>
              <div class="singer">BLACKPINK</div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
        
            </div>
            <div class="text-wrapper">
              <div class="song">PLAYING WITH FIRE</div>
              <div class="singer">BLACKPINK</div>
            </div>
          </div>
          <div class="item">
            <div class="pic">
        
            </div>
            <div class="text-wrapper">
              <div class="song">PLAYING WITH FIRE</div>
              <div class="singer">BLACKPINK</div>
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
    name: "latest-music",
    data() {
      return {
        clickable: true,
        title: '最新音乐',
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
  @import "LatestMusic.styl"
</style>
