<template>
  <div class="singer-albums">
    <p class="title">按发行日期排序</p>
    <img-collect-item
      v-for="item in sortedAlbums"
      :key="item.id"
      :img-url="item.picUrl"
      :item-name="item.name"
      :item-intro="`${item.publishTime} ${item.size}首`"
      item-type="musiclist"></img-collect-item>
  </div>
</template>

<script>
  import song from "../../api/song"
  import ImgCollectItem from "../base/CollectItem/ImgCollectItem"

  export default {
    name: "SingerAlbums",
    props: ['id'],
    components: {
      ImgCollectItem
    },
    data() {
      return {
        albums: []
      }
    },
    watch: {
      id(val, oldVal) {
        song.GetSingerAlbums(val)
          .then((res) => {
            this._formatAblums(res.data.hotAlbums)
          })
      }
    },
    computed: {
      sortedAlbums() {
        this.albums.sort((a, b) => {
          return b.publishTime - a.publishTime
        })
        return this.albums.map((item) => {
          let date = new Date(item.publishTime)
          item.publishTime = date.toLocaleDateString().split('/').join('-')
          return item
        })
      }
    },
    methods: {
      _formatAblums(data) {
        this.albums = data
      }
    },
    created() {
      song.GetSingerAlbums(this.id)
        .then((res) => {
          this._formatAblums(res.data.hotAlbums)
        })
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" type="text/stylus" scoped>
  @import "./SingerAlbums.styl"
</style>
