<template>
  <div class="singer-hotsongs">
    <collect-item
      header-icon-name="play_arrow"
      item-name="播放全部"
      item-type="icon">
    </collect-item>
  </div>
</template>

<script>
  import CollectItem from "../base/CollectItem/CollectItem"

  export default {
    name: "SingerHotSongs",
    props: {
      songs: {
        type: Array,
        required: true
      }
    },
    components: {
      CollectItem
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" type="text/stylus" scoped>
  @import "./SingerHotSongs.styl"
</style>
