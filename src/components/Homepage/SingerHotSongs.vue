<template>
  <div class="singer-hotsongs">
    <div class="play-all">
      <i class="material-icons md-56">play_arrow</i>
      <p>播放全部</p>
    </div>
    <music-collect-item
      v-for="item in sortedSongs"
      :key="item.id"
      :need-index="true"
      :need-mv="true"
      :mv="item.mv"
      :song="item.id"
      :index="item.index"
      :artists="item.ar"
      :album="item.al"
      :name="item.name">
    </music-collect-item>
  </div>
</template>

<script>
  import CollectItem from "../base/CollectItem/CollectItem"
  import MusicCollectItem from "../base/CollectItem/MusicCollectItem"

  export default {
    name: "SingerHotSongs",
    props: {
      songs: {
        type: Array,
        required: true
      }
    },
    components: {
      CollectItem,
      MusicCollectItem
    },
    computed: {
      sortedSongs() {
        return this.songs.map((item, index) => {
          item.index = index + 1
          return item
        })
      }
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" type="text/stylus" scoped>
  @import "./SingerHotSongs.styl"
</style>
