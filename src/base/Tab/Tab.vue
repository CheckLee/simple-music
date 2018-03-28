<template>
  <div class="tab">
    <router-link class="tab-item" tag="div" to="/foundmusic/recommend">
      <span class="tab-link">个性推荐</span>
    </router-link>
    <router-link class="tab-item" tag="div" to="/foundmusic/songlist">
      <span class="tab-link">歌单</span>
    </router-link>
    <router-link class="tab-item" tag="div" to="/foundmusic/radio">
      <span class="tab-link">主播电台</span>
    </router-link>
    <router-link class="tab-item" tag="div" to="/foundmusic/rank">
      <span class="tab-link">排行榜</span>
    </router-link>
  </div>
</template>

<script>
  const tabArray = ['Recommend', 'SongList', 'Radio', 'Rank']
  
  export default {
    name: "tab",
    watch: {
      '$route' (to, from) {
        let type = (tabArray.indexOf(to.name) > tabArray.indexOf(from.name)) ? 'left' : 'right'
        this.$emit('judgeType', type)
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "Tab.styl"
</style>
