<template>
  <div class="user-homepage-tweets">
    <img-pre-viewer
      :show="show"
      :index="currentIndex"
      :img-arr="currentImageList"
      :scale="currentImgScale"
      :width="currentWidth"
      :height="currentHeight"
      :offset-x="currentOffsetX"
      :offset-y="currentOffsetY"
      :mid-x="currentMidLineX"
      :mid-y="currentMidLineY"
      @clickit="_previewImg">
    </img-pre-viewer>
    <scroll
      class="user-tweets-content"
      :isEnd="isEndScroll"
      @getCurrentY="_getCurrentY"
      :listen-scroll="true">
      <li v-for="item in pushTweets"
          is="TweetsCard"
          @getTargetInfo="_getTargetInfo"
          :key="item.tweetsTime"
          :data="item">
      </li>
      <div class="blank"></div>
    </scroll>
  </div>
</template>

<script>
  import tweets from "../../api/tweets"
  import song from "../../api/song"
  import TweetsCard from "../base/CollectItem/TweetsCard"
  import Scroll from "../base/Scroll/Scroll"
  import ImgPreViewer from "../base/Viewer/ImgPreViewer"

  export default {
    name: "UserHomepageTweets",
    components: {
      Scroll,
      TweetsCard,
      ImgPreViewer},
    props: {
      isEndScroll: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        uid: 1,
        show: false,
        screenWidth: 0,
        screenHeight: 0,
        scrollY: 0,
        pushTweets: [],
        currentMidLineX: 0,
        currentMidLineY: 0,
        currentImgScale: 0.5,
        currentWidth: 0,
        currentOffsetX: 0,
        currentHeight: 0,
        currentOffsetY: 0,
        currentIndex: 0,
        currentImageList:[
          { width: 750, type: 'normal', index: 0, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_unloadimg.png' },
          { width: 750, type: 'normal', index: 1, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_avatar.png' },
          { width: 750, type: 'long', index: 2, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/test_longpics.jpg' },
          { width: 750, type: 'normal', index: 3, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_unloadimg.png' },
          { width: 750, type: 'normal', index: 4, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_avatar.png' },
          { width: 750, type: 'long', index: 5, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/test_longpics.jpg' },
          { width: 750, type: 'normal', index: 6, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_unloadimg.png' },
          { width: 750, type: 'normal', index: 7, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_avatar.png' },
          { width: 750, type: 'long', index: 8, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/test_longpics.jpg' }
        ]
      }
    },
    watch: {
      // Maybe store preview flag(show) into vuex
      show(val, oldVal) {
        let body = document.querySelector('body')
        if (val) {
          console.log(val)
          body.classList.add('preview')
        }
        else {
          body.classList.remove('preview')
        }
      }
    },
    methods: {
      _previewImg() {
        this.show = false
      },
      _getCurrentY(y) {
        this.scrollY = y
      },
      _getTargetInfo(payload) {
        if (payload['isImageList']) {
          let midLineX = this.screenWidth / 2,
            midLineY = (this.screenHeight/2 + -this.scrollY)
          this.currentImageList = payload['imageList']
          this.currentWidth = payload['width']
          this.currentOffsetX = payload['left']
          this.currentHeight = payload['height']
          this.currentOffsetY = payload['top']
          this.currentIndex = payload['index']
          this.currentImgScale = payload['scale']
          this.currentMidLineX = midLineX
          this.currentMidLineY = midLineY
          this.show = true
          console.log(payload)
        }

      },
      _formatCreator(data) {
        return {
          accountName: data.nickname,
          accountId: data.userId
        }
      },
      _formatTweet(data, type) {
        let tweet = JSON.parse(data.json),
          creator = this._formatCreator(data.user)

        return {
          type: type,
          title: tweet.msg,
          creator: creator,
          event: {
            id: creator.accountId,
            avatarUrl: data.user.avatarUrl
          }
        }
      },
      _formatSong(data, type) {
        let title = data.hasOwnProperty('transName')? `${data.name}(${data.transName[0]})`:data.name
        return {
          type: type,
          title: title,
          creator: {
            accountName: data.artists[0].name,
            accountId: data.artists[0].id
          },
          song: {
            id: data.id,
            avatarUrl: data.album.img80x80
          }
        }
      },
      _formatPlayList(data, type) {
        return {
          type: type,
          title: data.name,
          creator: this._formatCreator(data.creator),
          playlist: {
            id: data.id,
            avatarUrl: data.coverImgUrl
          }
        }
      },
      _formatCommit(data, type) {
        let resource = JSON.parse(data.resourceJson),
          creator = this._formatCreator(data.user)
        return {
          type: type,
          title: data.content,
          creator: creator,
          resource: {
            id: resource.id,
            avatarUrl: data.user.avatarUrl
          }
        }
      },
      _formatVideo(data, type) {
        return {
          type: type,
          title: data.title,
          creator: this._formatCreator(data.creator),
          video: {
            id: data.videoId,
            avatarUrl: data.coverUrl
          }
        }
      },
      _formatProgram(data, type) {
        return {
          type: type,
          title: data.name,
          creator: this._formatCreator(data.dj),
          program: {
            avatarUrl: data.coverUrl,
            id: data.id
          }
        }
      },
      _formatShared(tweetsBody) {
        let shareKeys = ["event", "song", "playlist", "video", "resource", "program"],
          keys = Object.keys(tweetsBody),
          intersection = this._.intersection(keys, shareKeys),
          isShared = intersection.length,
          sharedContent = {}
        if (isShared) {
          let shareType = intersection[0]
          switch(shareType) {
            case "event":
              sharedContent = this._formatTweet(tweetsBody[shareType], shareType)
              break
            case "song":
              sharedContent = this._formatSong(tweetsBody[shareType], shareType)
              break
            case "playlist":
              sharedContent = this._formatPlayList(tweetsBody[shareType], shareType)
              break
            case "resource":
              sharedContent = this._formatCommit(tweetsBody[shareType], shareType)
              break
            case "video":
              sharedContent = this._formatVideo(tweetsBody[shareType], shareType)
              break
            case "program":
              sharedContent = this._formatProgram(tweetsBody[shareType], shareType)
              break
            default:
              break
          }
        }
        return {
          isShared: isShared,
          sharedContent: sharedContent
        }
      },
      _formatPics(data) {
        let pics = [],
          isPics = false,
          screenWidth = this.screenWidth,
          screenHeight = this.screenHeight
        if (Array.isArray(data) && data.length > 0) {
          isPics = true
          data.forEach((pic, index) => {
            let isLong = _isLong(pic.width, pic.height),
              formatPic = {}
            formatPic = {
              type: isLong? 'long':'normal',
              url: pic.originUrl,
              index: index
            }
            pics.push(formatPic)
          })
        }
        function _isLong(w, h) {
          let ratio = w/screenWidth,
            resizeWitdth = h/ratio
          return resizeWitdth > screenHeight
        }
        return {
          isPics: isPics,
          pics: pics
        }
      },
      _formatMv(data) {
        let isMv = !! data.mv,
          mv = {}
        if (isMv) {
          return song.GetMv(data.mv.id)
            .then((res) => {
              console.log(res)
              let mvData = res.data.data
              console.log(mvData)
              mv = {
                id: mvData.id,
                videoUrls: mvData.brs,
                duration: mvData.duration,
                playCount: mvData.playCount,
                title: mvData.desc,
                posterSrc: mvData.cover,
                type: 'video/mp4'
              }
              return Promise.resolve({ isMv: isMv, mv: mv })
            })
        }
        else {
          return Promise.resolve({ isMv: isMv, mv: mv })
        }
      },
      _formatEvents(events) {
        let pushTweets = []
        events.forEach((item) => {
          let tweetBody = JSON.parse(item.json),
            {isShared, sharedContent} = this._formatShared(tweetBody),
            {isPics, pics} = this._formatPics(item.pics),
            pushTweetsEvent = {}
          this._formatMv(tweetBody)
            .then((mv) => {
              pushTweetsEvent = {
                user: {
                  accountName: item.user.nickname,
                  accountId: item.user.userId,
                  avatarUrl: item.user.avatarUrl,
                },
                tweetsTime: item.eventTime,
                actName: item.actName,
                forwardNum: item.forwardCount,
                commitNum: item.info.commentCount,
                thumbupNum: item.info.likedCount,
                msg: tweetBody.msg,
                isPics: isPics,
                pics: pics,
                isMv: mv.isMv,
                mv: mv.mv,
                isShared: isShared,
                shared: sharedContent
              }
              pushTweets.push(pushTweetsEvent)
            })
        })
        this.pushTweets = pushTweets
      }
    },
    created() {
      let path = this.$route.path.split('/'),
        uid = path[2]
      this.uid = uid
      tweets.GetTweets(uid)
        .then((res) => {
          this._formatEvents(res.data.events)
        })
    }
  }
</script>


<style rel="stylesheet/stylus" lang="stylus" type="text/stylus" scoped>
  @import "./UserHomepageTweets.styl"
</style>

