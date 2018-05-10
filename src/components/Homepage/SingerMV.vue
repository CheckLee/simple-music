<template>
  <div class="singer-mv">
    <img-collect-item
      v-for="item in mvs"
      :key="item.id"
      @getClickStatus="_linkMv(item.id)"
      :img-url="item.imgurl"
      :item-badge="item.playCount"
      :item-name="item.name"
      :item-intro="`@${item.artistName}`"
      item-type="mv">
    </img-collect-item>
  </div>
</template>

<script>
  import song from "../../api/song"
  import ImgCollectItem from "../base/CollectItem/ImgCollectItem"

  export default {
    name: "SingerMV",
    components: {
      ImgCollectItem
    },
    data() {
      return {
        mvs: [],
        id: 0,
      }
    },
    methods: {
      _formatMvs(data) {
        this.mvs = data
      },
      _linkMv(id) {
        this.$router.push({path: '/mvh', query: {vid: id, transition: 'slide-right'}})
      }
    },
    created() {
      let path = this.$route.path.split('/'),
        uid = path[2]
      this.id = uid
      song.GetSingerMV(this.id)
        .then((res) => {
          this._formatMvs(res.data.mvs)
        })
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" type="text/stylus" scoped>
  @import "./SingerMV.styl"
</style>

