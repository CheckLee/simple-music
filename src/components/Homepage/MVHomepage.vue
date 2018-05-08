<template>
  <div class="mv-homepage">
    <div class="mv-homepage-header nav-panel-wrapper">
      <div class="nav-panel">
        <span class="nav-header action-backward">
          <i class="material-icons md-56 md-light">keyboard_arrow_left</i>
        </span>
        <div class="nav-body panel">
        </div>
        <div class="nav-tail blank"></div>
      </div>
    </div>
    <section class="mv-wrapper">
    </section>
    <ul class="mvh-actions" :style="mvhAStyle">
      <li class="mvh-mv-suggestions-btn">
        <i class="material-icons md-48">ondemand_video</i>
        <span>5</span>
      </li>
      <li class="mvh-music-suggestions-btn">
        <i class="material-icons md-48">music_note</i>
        <span>5</span>
      </li>
      <li class="mvh-commit-btn">
        <i class="material-icons md-48">chat</i>
        <span>{{ mvInfo.commentCount }}</span>
      </li>
    </ul>
    <section class="mv-homepage-body">
      <scroll
        class="mv-content">
        <div class="mv-panel" ref="mvPanel">
          <div class="mv-title" @click="_toggleDesc">
            <p>{{ mvInfo.briefDesc }}</p>
            <i class="material-icons md-36 more" v-if="isMore">arrow_drop_up</i>
            <i class="material-icons md-36 more" v-else>arrow_drop_down</i>
          </div>
          <ul class="mv-creators">
            <p class="mv-creator">歌手：</p>
            <li v-for="item in mvInfo.artists" @click="_linkSinger(item.id)">
              <p>{{ item.name }}<span>/</span></p>
            </li>
          </ul>
          <ul class="mv-info">
            <li class="mv-publishtime">发行：{{ mvInfo.publishTime }}</li>
            <li class="mv-playcount">播放：{{ mvInfo.playCount }}</li>
          </ul>
          <ul class="mv-actions">
            <li class="mv-likeCount">
              <i class="material-icons md-36">thumb_up</i>
              <span class="thumbup-num">{{ mvInfo.likeCount }}</span>
            </li>
            <li class="mv-subCount">
              <i class="material-icons md-36">add_box</i>
              <span class="sub-num">{{ mvInfo.subCount }}</span>
            </li>
            <li class="mv-shareCount">
              <i class="material-icons md-36">share</i>
              <span class="share-num">{{ mvInfo.shareCount }}</span>
            </li>
          </ul>
          <p class="mv-desc" v-show="isMore">{{ mvInfo.desc }}</p>
        </div>
        <div class="mv-suggestions">
          <div class="panel">
            <p>相似MV</p>
          </div>
          <img-collect-item
            v-for="item in simiMVInfo"
            :img-url="item.cover"
            :item-badge="item.playCount"
            :item-name="item.briefDesc"
            :item-intro="`@${item.artistName}`"
            item-type="mv">
          </img-collect-item>
        </div>
        <div class="music-suggestions">
          <div class="panel">
            <p>相关音乐</p>
          </div>
          <music-collect-item
            :need-index="false"
            :need-mv="true"
            :mv="songInfo.mv"
            :artists="songInfo.ar"
            :album="songInfo.al"
            :name="songInfo.name">
          </music-collect-item>
        </div>
        <div class="commits-content">
          <div class="panel">
            <p>全部评论</p>
          </div>
        </div>
      </scroll>
    </section>
  </div>
</template>

<script>
  import Scroll from "../base/Scroll/Scroll"
  import ImgCollectItem from "../base/CollectItem/ImgCollectItem"
  import MusicCollectItem from "../base/CollectItem/MusicCollectItem"
  import song from "../../api/song"

  export default {
    name: "MVHomepage",
    components: {
      Scroll,
      ImgCollectItem,
      MusicCollectItem
    },
    props: ['vid', 'sid'],
    data() {
      return {
        name: 'MVHomepage',
        isMore: false,
        mvPanelHeight: 0,
        mvInfo: {
          artistId:62662,
          artistName:"Jessie J",
          artists:[{
            id:62662,
            name:"Jessie J"
          }],
          briefDesc:"电影《冰川时代5》片尾曲MV",
          brs:{
            1080:"http://v4.music.126.net/20180508060624/975e5dd1d317ddc7dce6794c987fb786/web/cloudmusic/JDBhJWA5MDUjISI0ZDNgZQ==/mv/5360030/29cd958ff89060bfc5b7f8e5b9a63dc6.mp4",
            240:"http://v4.music.126.net/20180508060624/de1acc088eb744bc295b77be92bd68b5/web/cloudmusic/JDBhJWA5MDUjISI0ZDNgZQ==/mv/5360030/2abb40d939ad706b7878fdd9751e58d1.mp4",
            480:"http://v4.music.126.net/20180508060624/4a811ca61501b9edd00a520de4235e4c/web/cloudmusic/JDBhJWA5MDUjISI0ZDNgZQ==/mv/5360030/187165f0cea9de55808c8aa94f68aa90.mp4",
            720:"http://v4.music.126.net/20180508060624/8f56d958e6c766ef5e1ea7a06b8a7878/web/cloudmusic/JDBhJWA5MDUjISI0ZDNgZQ==/mv/5360030/3bc0b8ee3f386e454d543010ad85e446.mp4",
          },
          commentCount:1950,
          commentThreadId:"R_MV_5_5360030",
          cover:"http://p3.music.126.net/RFipkmY3jYdtU1d5JbPWfg==/1372190526113978.jpg",
          coverId:1372190526113978,
          desc:"好莱坞系列动画电影《冰川时代5：星际碰撞》曝光片尾曲MV《My Superstar》，英国流行天后Jessie J 一展歌喉，演唱年轻貌美性格好的女树懒布鲁克(Jessie J配音)，为其貌不扬的话痨男树懒希德打造的饱含深情的“爱之歌”。",
          duration:61000,
          id:5360030,
          isReward:false,
          likeCount:5545,
          nType:0,
          name:"My Superstar",
          playCount:448711,
          publishTime:"2016-08-22",
          shareCount:544,
          subCount:5538,
        },
        simiMVInfo: [
          {
            alg:"itembased",
            artistId:70850,
            artistName:"Pixie Lott",
            artists:[
              {
                id:42980,
                name:"Shaggy"
              },
              {
                id:70850,
                name:"Pixie Lott"
              }
            ],
            briefDesc:"鲜肉沙滩性感热舞",
            cover:"http://p3.music.126.net/YpMCVY1GKssvaE7qGwJqRg==/3399689964628516.jpg",
            desc:null,
            duration:232000,
            id:5356031,
            mark:0,
            name:"A Real Good Thing",
            playCount:121773,
          },
          {
            alg:"itembased",
            artistId:70850,
            artistName:"Pixie Lott",
            artists:[
              {
                id:42980,
                name:"Shaggy"
              },
              {
                id:70850,
                name:"Pixie Lott"
              }
            ],
            briefDesc:"鲜肉沙滩性感热舞",
            cover:"http://p3.music.126.net/YpMCVY1GKssvaE7qGwJqRg==/3399689964628516.jpg",
            desc:null,
            duration:232000,
            id:5356030,
            mark:0,
            name:"A Real Good Thing",
            playCount:121773,
          }
        ],
        songInfo: {
          a:null,
          al: {
            id:34209,
            name:"海阔天空",
            pic:102254581395219,
            picUrl:"http://p1.music.126.net/QHw-RuMwfQkmgtiyRpGs0Q==/102254581395219.jpg"
          },
          ar:[
            {
              id:11127,
              name:"Beyond",
            }
          ],
          cd:"1",
          cf:"",
          copyright:1,
          cp:7002,
          crbt:null,
          djId:0,
          dt:326348,
          fee:8,
          ftype:0,
          id:347230,
          mst:9,
          mv:376199,
          name:"海阔天空",
          no:1,
          pop:100,
          pst:0,
          publishTime:746812800000,
          rt:"600902000004240302",
          rtUrl:null,
          rtype:0,
          rurl:null,
          s_id:0,
          st:0,
          t:0,
          v:31,
        }
      }
    },
    computed: {
      mvhAStyle() {
        return {
          position: 'absolute',
          top: `${this.mvPanelHeight}px`,
          left: 0
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.mvPanelHeight = this.$refs.mvPanel.offsetHeight
      })
    },
    methods: {
      _toggleDesc() {
        this.isMore = !this.isMore
        this.$nextTick(() => {
          this.mvPanelHeight = this.$refs.mvPanel.offsetHeight
        })
      },
      _linkSinger(id) {
        console.log(id)
      },
      _formatMV(data) {
        this.mvInfo = data
      },
      _formatSimiMv(data) {
        this.songInfo = data
      },
      _formatSimiSong(data) {
        this.songInfo = data[0]
      }
    },
    created() {
      // song.GetMv(this.vid)
      // .then((res) => {
      //   this._formatMV(res.data.data)
      // })
      // song.GetSimiMv(5360030)
      //   .then((res) => {
      //     this._formatSimiMv(res.data.mvs)
      //   })
      // song.GetSongDetail(347230)
      //   .then((res) => {
      //     console.log(res)
      //     this._formatSimiSong(res.data.songs)
      //   })
      song.GetMvComments(376199)
        .then((res) => {
          console.log(res)
        })
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" type="text/stylus" scoped>
  @import "./MVHomepage.styl"
</style>
