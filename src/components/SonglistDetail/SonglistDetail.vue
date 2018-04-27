<template>
	<div class="songlist-detail">
    <i class="material-icons" @click="back">keyboard_arrow_left</i>
  </div>
</template>

<script>
  import api from 'api/song'
  export default {
    name: "",
    data() {
      return {
        songlistId: '',
        songlistDetail: {}
      }
    },
    created() {
      this.songlistId = this.$route.params.id
      api.GetSongListDetail(this.songlistId).then(({ data }) => {
        console.log(data)
        if (data.code === 200) {
          this.songlistDetail = data.result
        }
      })
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "./SonglistDetail.styl"
</style>
