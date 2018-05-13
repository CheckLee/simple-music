<template>
	<div class="daily-recommend-item">
    <img v-lazy="item.album.picUrl" alt="item.album.pic" class="album-pic">
    <div class="info-wrapper">
      <div class="song-name">{{ item.name }} <span class="trans" v-if="item.transName">({{ item.transName }})</span> </div>
      <div class="others">{{ singers }} - {{ item.album.name }}</div>
    </div>
    <i class="material-icons mv-icon" v-show="item.mvid">ondemand_video</i>
    <i class="material-icons more-icon">more_horiz</i>
  </div>
</template>

<script>
  export default {
    name: "daily-recommend-item",
    props: {
      item: {
        type: Object
      }
    },
    computed: {
      singers() {
        let res = ''
        this.item.artists.forEach(artist => {
          res += artist.name + '/'
        })
        return res.substring(0, res.length - 1)
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "DailyRecommendItem.styl"
</style>
