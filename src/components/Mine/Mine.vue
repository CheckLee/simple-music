<template>
	<div class="mine">
    <div class="header">
      <div class="search">
        <i class="material-icons md-56 md-light">cloud_queue</i>
        <div class="panel">我的音乐</div>
        <div class="blank"></div>
      </div>
    </div>
    <scroll class="mine-content"
            :listen-scroll="listenScroll"
            :probe-type="probeType"
            :data="playlist"
            ref="mineContent"
            @scroll="scroll">
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
        <section class="playlists created-playlist" v-if="createdPlaylist" ref="createdPlaylist">
          <div class="panel" @click="toggleCreatedPlaylistShow">
            <i class="material-icons show" v-if="isCreatedPlaylistShow">keyboard_arrow_down</i>
            <i class="material-icons show" v-else>keyboard_arrow_right</i>
            <span class="text">我创建的歌单({{ createdPlaylistCount }})</span>
            <i class="material-icons more" @click.stop="manageCreated">more_horiz</i>
          </div>
          <div class="lists" v-if="isCreatedPlaylistShow">
            <div class="list-item" v-for="item in createdPlaylist" :key="item.id">
              <div class="left">
                <img v-lazy="item.coverImgUrl" alt="item.coverImgId">
              </div>
              <div class="right">
                <span class="name">{{ item.name }}</span>
                <span class="count">{{ item.trackCount }}首</span>
                <i class="material-icons" style="display: none;">hearing</i>
              </div>
            </div>
          </div>
        </section>
        <section class="playlists sub-playlist" v-if="subPlaylist" ref="subPlaylist">
          <div class="panel" @click="toggleSubPlaylistShow">
            <i class="material-icons show" v-if="isSubPlaylistShow">keyboard_arrow_down</i>
            <i class="material-icons show" v-else>keyboard_arrow_right</i>
            <span class="text">我收藏的歌单({{ subPlaylistCount }})</span>
            <i class="material-icons more" @click.stop="manageSub">more_horiz</i>
          </div>
          <div class="lists" v-if="isSubPlaylistShow">
            <div class="list-item" v-for="item in subPlaylist" :key="item.id">
              <div class="left">
                <img v-lazy="item.coverImgUrl" alt="item.coverImgId">
              </div>
              <div class="right">
                <span class="name">{{ item.name }}</span>
                <span class="count">{{ item.trackCount }}首</span>
                <i class="material-icons" style="display: none;">hearing</i>
              </div>
            </div>
          </div>
        </section>
        <section class="blank" style="height: 112px;"></section>
      </div>
    </scroll>
    <div class="fixed-panel" v-show="isCreatedPanelShow" ref="fixedCreatedPanel" @click="toggleCreatedPlaylistShow">
      <i class="material-icons show" v-if="isCreatedPlaylistShow">keyboard_arrow_down</i>
      <i class="material-icons show" v-else>keyboard_arrow_right</i>
      <span class="text">我创建的歌单({{ createdPlaylistCount }})</span>
      <i class="material-icons more">more_horiz</i>
    </div>
    <div class="fixed-panel" v-show="isSubPanelShow" ref="fixedSubPanel" @click="toggleSubPlaylistShow">
      <i class="material-icons show" v-if="isSubPlaylistShow">keyboard_arrow_down</i>
      <i class="material-icons show" v-else>keyboard_arrow_right</i>
      <span class="text">我收藏的歌单({{ subPlaylistCount }})</span>
      <i class="material-icons more">more_horiz</i>
    </div>
  </div>
</template>

<script>
  import Scroll from 'base/Scroll/Scroll'
  import api from 'api/login'
  import { mapGetters } from 'vuex'
  
  console.log(window.innerHeight)
  const INFO_HEIGHT = 188 / 667 * window.innerHeight
  console.log(INFO_HEIGHT)
  const PANEL_HEIGHT = 25 / 667 * window.innerHeight
  const ITEM_HEIGHT = 65 / 667 * window.innerHeight
  
  export default {
    name: "mine",
    data() {
      return {
        // 创建歌单数量
        createdPlaylistCount: 0,
        // 收藏歌单数量
        subPlaylistCount: 0,
        // 获取到的歌单
        playlist: [],
        // 创建的歌单
        createdPlaylist: [],
        // 收藏的歌单
        subPlaylist: [],
        // 控制创建歌单伸缩
        isCreatedPlaylistShow: true,
        // 控制收藏歌单伸缩
        isSubPlaylistShow: true,
        // 当前滚动点
        scrollY: -1,
        // 与顶部差值
        diff: -1,
        // 判断创建歌单panel是否出现
        isCreatedPanelShow: false,
        // 判断收藏歌单panel是否出现
        isSubPanelShow: false,
  
        createdPlaylistHeight: 0,
        subPlaylistHeight: 0
      }
    },
    components: {
      Scroll
    },
    computed: {
      ...mapGetters(['currentUid'])
    },
    methods: {
      scroll(pos) {
        this.scrollY = pos.y
      },
      toggleCreatedPlaylistShow() {
        this.createdPlaylistHeight = (this.isCreatedPlaylistShow === true) ? PANEL_HEIGHT : PANEL_HEIGHT + ITEM_HEIGHT * this.createdPlaylistCount
        this.isCreatedPlaylistShow = !this.isCreatedPlaylistShow
        this.scrollY = -INFO_HEIGHT + 1
        // this.$refs.mineContent.refresh()
        this.$refs.mineContent.scrollTo(0, this.scrollY)
      },
      toggleSubPlaylistShow() {
        if (this.isSubPlaylistShow) {
          if (this.isCreatedPlaylistShow) {
            this.scrollY = -INFO_HEIGHT - this.createdPlaylistHeight - PANEL_HEIGHT + 1
            this.isSubPanelShow = false
            // this.$refs.fixedCreatedPanel.top = 52 / 667 * window.innerHeight + 'px'
          } else {
            this.scrollY = 0
            this.isCreatedPanelShow = false
          }
        } else {
          this.scrollY = -INFO_HEIGHT - this.createdPlaylistHeight + 1
        }
        
        this.isSubPlaylistShow = !this.isSubPlaylistShow
        // this.$refs.mineContent.refresh()
        this.$refs.mineContent.scrollTo(0, this.scrollY)
      },
      manageCreated() {},
      manageSub() {}
      
    },
    watch: {
      scrollY(newY) {
        // const cHeight = this.createdPlaylistHeight
        // const sHeight = this.subPlaylistHeight
        // console.log(newY)
        // 当滚动到顶部时
        if (newY > 0) {
          return
        } else if (-newY >= INFO_HEIGHT && -newY < INFO_HEIGHT + this.createdPlaylistHeight) {
          this.isCreatedPanelShow = true
          this.isSubPanelShow = false
        } else if (-newY >= INFO_HEIGHT + this.createdPlaylistHeight) {
          this.isSubPanelShow = true
          this.isCreatedPanelShow = false
        } else {
          this.isSubPanelShow = false
          this.isCreatedPanelShow = false
        }
        this.diff = newY + INFO_HEIGHT + this.createdPlaylistHeight - PANEL_HEIGHT
      },
      diff(newV) {
        // console.log(newV)
        let fixedTop = (newV < 0 && newV >= -PANEL_HEIGHT) ? newV : 0
        // console.log(fixedTop)
        /*if (this.fixedTop = fixedTop) {
          return
        }
        this.fixedTop = fixedTop*/
        this.$refs.fixedCreatedPanel.style.transform = `translate3d(0, ${fixedTop}px, 0)`
      }
    },
    // uid 42118535
    created() {
      // 初始值设置
      this.probeType = 3
      this.listenScroll = true
      /* 我先模拟数据 */
      /*this.createdPlaylistCount = 34
      this.subPlaylistCount = 20
      let createdItem = {
        name: '我喜欢的音乐',
        trackCount: 100,
        coverImgUrl: '',
        coverImgId: '0'
      }
      let subItem = {
        name: '我收藏的音乐',
        trackCount: 100,
        coverImgUrl: '',
        coverImgId: '0'
      }
      for (var i = 0; i < 34; i++) {
        let tmp = Object.assign({}, createdItem)
        this.createdPlaylist.push(tmp)
      }
      for (var i = 0; i < 20; i++) {
        let tmp = Object.assign({}, subItem)
        this.subPlaylist.push(tmp)
      }
      this.createdPlaylistHeight = PANEL_HEIGHT + ITEM_HEIGHT * this.createdPlaylistCount
      this.subPlaylistHeight = PANEL_HEIGHT + ITEM_HEIGHT * this.subPlaylistCount*/
      
      let userInfo = JSON.parse(localStorage.getItem('simplemusicUserInfo'))
      let uid = this.currentUid || userInfo.uid
      console.log(this.currentUid)
      api.GetUserSubCount().then((res) => {
        console.log(res.data)
        if (res.data.code === 200) {
          this.createdPlaylistCount = res.data.createdPlaylistCount
          this.subPlaylistCount = res.data.subPlaylistCount
        }
      })
      api.GetUserPlayList(uid).then(res => {
        if (res.data.code === 200) {
          console.log(res.data)
          this.playlist = res.data.playlist
          this.createdPlaylist = res.data.playlist.slice(0, this.createdPlaylistCount)
          this.subPlaylist = res.data.playlist.slice(this.createdPlaylistCount)
          this.createdPlaylistHeight = PANEL_HEIGHT + ITEM_HEIGHT * this.createdPlaylistCount
          this.subPlaylistHeight = PANEL_HEIGHT + ITEM_HEIGHT * this.subPlaylistCount
        }
      })
      
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "Mine.styl"
</style>
