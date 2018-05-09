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
    <div class="mv-wrapper" ref="mvWrapper">
      <video-pre-viewer
        :width="375"
        :height="mvWrapperHeight"
        :video-type="videoType"
        :video-src="`/mv/url?url=${mvInfo.brs['240']}`"
        :poster-src="mvInfo.cover">
      </video-pre-viewer>
    </div>
    <ul class="mvh-actions" :style="mvhAStyle" ref="mvhActions">
      <li class="mvh-mv-suggestions-btn" @click="_scrollTo(isMv, 'mvSuggestion')">
        <i class="material-icons md-48">ondemand_video</i>
        <span>{{ simiMVInfo.length }}</span>
      </li>
      <li class="mvh-music-suggestions-btn" @click="_scrollTo(isSong, 'songSuggestion')">
        <i class="material-icons md-48">music_note</i>
        <span>{{ songsCount }}</span>
      </li>
      <li class="mvh-commit-btn" @click="_scrollTo(isComment, 'comments')">
        <i class="material-icons md-48">chat</i>
        <span>{{ mvInfo.commentCount | roundOht }}</span>
      </li>
    </ul>
    <section class="mv-homepage-body" :style="mvhBStyle">
      <scroll
        :probeType="3"
        :scrollToPosY="scrollToPosY"
        :listenScroll="isListenScroll"
        :pullUpLoad = "pullLoadObj"
        @pullingUp="_test"
        @scroll="_getCurrentPos"
        class="mv-content">
        <div class="mv-panel" ref="mvPanel">
          <div class="mv-title" @click="_toggleDesc">
            <p>{{ mvBriefDesc }}</p>
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
            <li class="mv-playcount">播放：{{ mvInfo.playCount | roundOht }}</li>
          </ul>
          <ul class="mv-actions">
            <li class="mv-likeCount">
              <i class="material-icons md-36">thumb_up</i>
              <span class="thumbup-num">{{ mvInfo.likeCount | roundOht }}</span>
            </li>
            <li class="mv-subCount">
              <i class="material-icons md-36">add_box</i>
              <span class="sub-num">{{ mvInfo.subCount | roundOht }}</span>
            </li>
            <li class="mv-shareCount">
              <i class="material-icons md-36">share</i>
              <span class="share-num">{{ mvInfo.shareCount | roundOht }}</span>
            </li>
          </ul>
          <p class="mv-desc" v-show="isMore">{{ mvInfo.desc }}</p>
        </div>
        <div class="mv-suggestions" v-show="isMv" ref="mvSuggestion">
          <div class="panel">
            <p>相似MV</p>
          </div>
          <img-collect-item
            v-for="item in simiMVInfo"
            @getClickStatus="_linkMv(item.id)"
            :img-url="item.cover"
            :item-badge="item.playCount"
            :item-name="item.name"
            :item-intro="`@${item.artistName}`"
            item-type="mv">
          </img-collect-item>
        </div>
        <div class="music-suggestions" v-show="isSong" ref="songSuggestion">
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
        <div class="commits-content" v-show="isComment" ref="comments">
          <div class="panel">
            <p>全部评论</p>
          </div>
          <comment-card
            v-for="item in comments"
            :comment-info="item">
          </comment-card>
        </div>
        <div class="blank"></div>
      </scroll>
    </section>
  </div>
</template>

<script>
  import Scroll from "../base/Scroll/Scroll"
  import ImgCollectItem from "../base/CollectItem/ImgCollectItem"
  import MusicCollectItem from "../base/CollectItem/MusicCollectItem"
  import CommentCard from "../base/CollectItem/CommentCard"
  import VideoPreViewer from "../base/Viewer/VideoPreViewer"
  import song from "../../api/song"

  export default {
    name: "MVHomepage",
    components: {
      Scroll,
      ImgCollectItem,
      MusicCollectItem,
      VideoPreViewer,
      CommentCard
    },
    props: ['vid', 'sid'],
    data() {
      return {
        name: 'MVHomepage',
        isMore: false,
        videoType: 'video/mp4',
        isListenScroll: true,
        scrollY: 0,
        scrollToPosY: 0,
        pullLoadObj: {
          threshold: 100,
          txt: {
            more: '加载更多',
            noMore: '没有更多数据'
          }
        },
        mvPanelHeight: 135,
        mvWrapperHeight: 210,
        mvInfo: {},
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
        },
        comments: []
      }
    },
    watch: {
      '$route'(to, from) {
        if (this._filter(to)) {
          let vid = to.query['vid']
            ,sid = to.query['sid']
          song.GetMv(vid)
            .then((res) => {
              this._formatMV(res.data.data)
            })
          song.GetSimiMv(vid)
            .then((res) => {
              console.log(res)
              this._formatSimiMv(res.data.mvs)
            })
          if (this.sid) {
            song.GetSongDetail(sid)
              .then((res) => {
                console.log(res)
                this._formatSong(res.data.songs)
              })
          }
          song.GetMvComments(vid)
            .then((res) => {
              this._formatComments(res.data.comments)
            })
        }
      }
    },
    computed: {
      isSong() {
        return !!this.sid
      },
      isMv() {
        return !!this.simiMVInfo.length
      },
      isComment() {
        return !!this.comments.length
      },
      songsCount() {
        return this.isSong? 1:0
      },
      mvhAStyle() {
        if (-this.scrollY > this.mvPanelHeight) {
          return {
            position: 'absolute',
            zIndex: 3,
            top: `${this.mvWrapperHeight - 1}px`,
            left: 0
          }
        }
        return {
          position: 'absolute',
          zIndex: 3,
          top: `${this.scrollY + this.mvPanelHeight + this.mvWrapperHeight}px`,
          left: 0
        }
      },
      mvhBStyle() {
        return {
          top: `${this.mvWrapperHeight}px`,
        }
      },
      mvBriefDesc() {
        if (this.mvInfo.briefDesc) return `${this.mvInfo.name} - ${this.mvInfo.briefDesc}`
        return this.mvInfo.name
      },
      mvUrl() {
        let mvResKeys = Object.keys(this.mvInfo.brs)
        return `localhost:3000/mv/url?url=${this.mvInfo.brs[mvResKeys[mvResKeys.length - 1]]}`
      }
    },
    filters: {
      roundOht(val) {
        if (val < 100000) {
          return val
        }
        else {
          let dec = parseInt(val / 10000)
          return `${dec}万`
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        // this.mvPanelHeight = this.$refs.mvPanel.offsetHeight
        // this.mvWrapperHeight = this.$refs.mvWrapper.offsetHeight
      })
    },
    methods: {
      _toggleDesc() {
        this.isMore = !this.isMore
        this.$nextTick(() => {
          this.mvPanelHeight = this.$refs.mvPanel.offsetHeight
        })
      },
      _filter(to) {
        return to.name && to.name === 'MVHomepage'
      },
      _test() {
        console.log('pulling')
      },
      _scrollTo(flag, key) {
        if (flag) {
          this.scrollToPosY = -(this.$refs[key].offsetTop - this.$refs.mvhActions.offsetHeight)
        }
      },
      _getCurrentPos(data) {
        this.scrollY = data.y
      },
      _linkSinger(id) {
        console.log(id)
      },
      _linkMv(id) {
        this.$router.push({path: '/mvh', query: {vid: id}})
      },
      _formatMV(data) {
        this.mvInfo = data
      },
      _formatSimiMv(data) {
        this.simiMVInfo = data
      },
      _formatSong(data) {
        this.songInfo = data[0]
      },
      _formatComments(data) {
        this.comments = this.comments.concat(data)
      }
    },
    created() {
      song.GetMv(this.vid)
      .then((res) => {
        this._formatMV(res.data.data)
      })
      song.GetSimiMv(this.vid)
        .then((res) => {
          console.log(res)
          this._formatSimiMv(res.data.mvs)
        })
      if (this.sid) {
        song.GetSongDetail(this.sid)
          .then((res) => {
            console.log(res)
            this._formatSong(res.data.songs)
          })
      }
      song.GetMvComments(this.vid)
        .then((res) => {
          this._formatComments(res.data.comments)
        })
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" type="text/stylus" scoped>
  @import "./MVHomepage.styl"
</style>
