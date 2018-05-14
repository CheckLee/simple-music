<template>
  <div class="user-homepage-music">
    <div class="panel created-playlist-nav" ref="panel">
      <p>歌单<span>({{ createdPlaylistNum }})</span></p>
      <p>共被收藏<span>{{ subscribedCount }}次</span></p>
    </div>
    <section class="playlists created-playlist" ref="createdPlaylist">
      <li
        v-for="item in createdPlaylists"
        is="ImgCollectItem"
        :key="item.id"
        :img-url="item.coverImgUrl"
        :item-name="item.name"
        :item-intro="`${item.trackCount}首，已播放${item.playCount}次`"
        item-type="musiclist">
      </li>
    </section>
    <div class="panel sub-playlist-nav" v-show="subPlaylistNum != 0">
      <p>收藏的歌单<span>({{ subPlaylistNum }})</span></p>
    </div>
    <section class="playlists sub-playlist">
      <li
        v-for="item in subPlaylists"
        is="ImgCollectItem"
        :key="item.id"
        :img-url="item.coverImgUrl"
        :item-name="item.name"
        :item-intro="`${item.trackCount}首，已播放${item.playCount}次`"
        item-type="musiclist">
      </li>
    </section>
    <div class="blank"></div>
  </div>
</template>

<script>
  import login from "../../api/login"
  import ImgCollectItem from "../base/CollectItem/ImgCollectItem"

  export default {
    name: "UserHomepageMusic",
    data() {
      return {
        id: 0,
        name: "UserHomepageMusic",
        panelHeight: 25,
        createdPlaylistHeight: 0,
        officalPlaylistCount: 0,
        playlists: []
      }
    },
    components: {
      ImgCollectItem
    },
    watch: {
      '$route'(to, from) {
        if (this._filter(to)) {
          let id = to.path.split('/')[2]
          login.GetUserDetail(id)
            .then((res) => {
              let createdPlayListNum = res.data.profile.playlistCount
              return Promise.resolve(createdPlayListNum)
            })
            .then(data => {
              return login.GetUserPlayList(id)
                .then((res) => {
                  return Promise.resolve({createdPlaylistNum: data, playlist: res.data.playlist})
                })
            })
            .then((data) => {
              this._formatPlaylist(data)
            })
        }
      }
    },
    computed: {
      createdPlaylistNum() {
        return Math.min(this.officalPlaylistCount, this.playlists.length)
      },
      createdPlaylists() {
        return this.playlists.slice(0, this.createdPlaylistNum)
      },
      subPlaylistNum() {
        return Math.max(this.playlists.length - this.officalPlaylistCount, 0)
      },
      subPlaylists() {
        return this.subPlaylistNum > 0?
          this.playlists.slice(this.createdPlaylistNum, this.playlists.length)
          : []
      },
      subscribedCount() {
        let subscribedCount = 0
        this.createdPlaylists.forEach((item) => {
          subscribedCount += item.subscribedCount
        })
        return subscribedCount
      },
      playlistStyle() {
        return {
          paddingTop: `${this.panelHeight}px`
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.panelHeight = this.$refs.panel.offsetHeight
      })
    },
    methods: {
      _filter(route) {
        return route.name && route.name === this.name
      },
      _formatSubscribedCount(data) {
        let subscribedCount = 0
      },
      _formatPlaylist(data) {
        this.officalPlaylistCount = data.createdPlaylistNum
        this.playlists = data.playlist
      }
    },
    created() {
      let path = this.$route.path.split('/'),
        uid = path[2]
      this.id = uid
      login.GetUserDetail(uid)
        .then((res) => {
          let createdPlayListNum = res.data.profile.playlistCount
          return Promise.resolve(createdPlayListNum)
        })
        .then(data => {
          return login.GetUserPlayList(uid)
            .then((res) => {
              return Promise.resolve({createdPlaylistNum: data, playlist: res.data.playlist})
            })
        })
        .then((data) => {
          this._formatPlaylist(data)
        })
    }
  }
</script>

<style rel="stylesheet/stylus" type="text/stylus" lang="stylus" scoped>
  @import "./UserHomepageMusic.styl"
</style>
