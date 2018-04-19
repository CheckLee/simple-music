<template>
	<div class="mine">
    <div class="header">
      <div class="search">
        <i class="material-icons md-56 md-light">cloud_queue</i>
        <div class="panel">我的音乐</div>
        <div class="blank"></div>
      </div>
    </div>
    <scroll class="mine-content">
      <div>
        <section class="mine-info">
          <div class="mine-info-item">
            <div class="left">
              <i class="material-icons">music_note</i>
            </div>
            <div class="right">
              <span class="text">本地音乐</span>
              <span class="desc">23</span>
              <i class="material-icons">chevron_right</i>
            </div>
          </div>
          <div class="mine-info-item">
            <div class="left">
              <i class="material-icons">play_circle_outline</i>
            </div>
            <div class="right">
              <span class="text">最近播放</span>
              <span class="desc">100</span>
              <i class="material-icons">chevron_right</i>
            </div>
          </div>
          <div class="mine-info-item">
            <div class="left">
              <i class="material-icons">queue_music</i>
            </div>
            <div class="right">
              <span class="text">我的电台</span>
              <span class="desc">2</span>
              <i class="material-icons">chevron_right</i>
            </div>
          </div>
          <div class="mine-info-item">
            <div class="left">
              <i class="material-icons">star_border</i>
            </div>
            <div class="right">
              <span class="text">我的收藏</span>
              <span class="desc">专辑/歌手/视频/专栏</span>
              <i class="material-icons">chevron_right</i>
            </div>
          </div>
        </section>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'base/Scroll/Scroll'
  import api from 'api/login'
  import { mapGetters } from 'vuex'
  export default {
    name: "mine",
    data() {
      return {
        // 创建歌单数量
        createdPlaylistCount: 0,
        // 收藏歌单数量
        subPlaylistCount: 0,
        // 创建的歌单
        createdPlaylist: [],
        // 收藏的歌单
        subPlaylist: []
      }
    },
    components: {
      Scroll
    },
    computed: {
      ...mapGetters(['currentUid'])
    },
    // uid 42118535
    created() {
      let userInfo = JSON.parse(localStorage.getItem('simplemusicUserInfo'))
      // console.log(this.currentUid)
      api.GetUserSubCount().then((res) => {
        if (res.status === 200) {
          this.createdPlaylistCount = res.data.createdPlaylistCount
          this.subPlaylistCount = res.data.subPlaylistCount
        }
      })
      api.GetUserPlayList(42118535).then(res => {
        if (res.status === 200) {
          this.createdPlaylist = res.data.playlist.slice(0, this.createdPlaylistCount)
          this.subPlaylist = res.data.playlist.slice(this.createdPlaylistCount)
        }
      })
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "Mine.styl"
</style>
