<template>
  <div class="push-tweets" :class="{ 'preview': show }">
    <img-pre-viewer
      :show="show"
      :index="currentIndex"
      :img-arr="currentImageList"
      :scale="currentImgScale"
      :width="currentWidth"
      :offset-x="currentOffsetX"
      :height="currentHeight"
      :offset-y="currentOffsetY"
      @clickit="_previewImg">
    </img-pre-viewer>
    <scroll class="push-tweets-content">
      <li v-for="item in pushTweets"
          is="TweetsCard"
          :key="item.tweetsTime"
          :data="item">
      </li>
      <!--<tweets-card @getTargetInfo="_getTargetInfo" :data="data1"></tweets-card>-->
      <!--<tweets-card @getTargetInfo="_getTargetInfo" :data="data2"></tweets-card>-->
      <!--<tweets-card @getTargetInfo="_getTargetInfo" :data="data3"></tweets-card>-->
      <div class="blank"></div>
    </scroll>
  </div>
</template>

<script>
  import ImgPreViewer from "../base/Viewer/ImgPreViewer";
  import InfCircleLoader from "../base/Loader/InfCircleLoader";
  import TweetsCard from "../base/CollectItem/TweetsCard";
  import Scroll from "../base/Scroll/Scroll";
  import api from '../../api/tweets'
  import music from '../../api/song'

  export default {
    components: {
      Scroll,
      TweetsCard,
      InfCircleLoader,
      ImgPreViewer},
    name: "pushtweets",
    data() {
      return {
        show: false,
        screenWidth: 0,
        screenHeight: 0,
        pushTweets: [],
        data1: {
          type: 'images',
          follow: true,
          imageList: [
            { width: 750, type: 'normal', index: 0, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_unloadimg.png' },
            { width: 750, type: 'normal', index: 1, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_avatar.png' },
            { width: 750, type: 'long', index: 2, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/test_longpics.jpg' },
            { width: 750, type: 'normal', index: 3, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_unloadimg.png' },
            { width: 750, type: 'normal', index: 4, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_avatar.png' },
            { width: 750, type: 'long', index: 5, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/test_longpics.jpg' },
            { width: 750, type: 'normal', index: 6, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_unloadimg.png' },
            { width: 750, type: 'normal', index: 7, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_avatar.png' },
            { width: 750, type: 'long', index: 8, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/test_longpics.jpg' }
          ],
        },
        data2: {
          type: 'video',
          follow: true,
          videoType: "video/mp4",
          videoSrc: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
          posterSrc: "https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_video_poster.png"
        },
        data3: {
          type: 'shared',
          follow: false,
          shared: {
            type: 'music',
            author: '姜维',
            breif: '床前明月光，疑是地上霜。 举头望明月，低头思故乡。床前明月光，疑是地上霜。 举头望明月，低头思故乡。'
          }
        },
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
      _getTargetInfo(payload) {
        if (payload['type'] === 'images') {
          this.currentImageList = payload['imageList']
          this.currentWidth = payload['width']
          this.currentOffsetX = payload['left']
          this.currentHeight = payload['height']
          this.currentOffsetY = payload['top']
          this.currentIndex = payload['index']
          this.show = true
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
            avatarUrl: data.user.avatar
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
            avatarUrl: data.img80x80
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
            avatarUrl: resource.imgUrl
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
      _formatShared(tweetsBody) {
        let shareKeys = ["event", "song", "playlist", "video", "resource"],
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
        if (data !== []) {
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
        //返回
      },
      _formatEvents(events) {
        let pushTweets = []
        console.log(events)
        events.forEach((item) => {
          let tweetBody = JSON.parse(item.json),
            {isShared, sharedContent} = this._formatShared(tweetBody),
            {isPics, pics} = this._formatPics(item.pics),
            pushTweetsEvent = {}
          console.log(tweetBody)
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
            isShared: isShared,
            shared: sharedContent
          }
          pushTweets.push(pushTweetsEvent)
        })
        console.log(pushTweets)
        this.pushTweets = pushTweets
      }
    },
    created() {
      api.GetTweets()
      .then((res) => {
        this._formatEvents(res.data.events)
      })
      this.screenWidth = document.documentElement.offsetWidth || document.body.offsetWidth
      this.screenHeight = document.documentElement.offsetHeight || document.body.offsetHeight
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./PushTweets.styl"
</style>
