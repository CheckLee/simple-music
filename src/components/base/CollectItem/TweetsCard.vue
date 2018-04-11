<template>
  <div class="card tweets-card">
    <div class="tweets-header">
      <div class="tweets-account-avatar">
        <div class="img">
          <img src="../../../assets/img/default_avatar.png" alt="avatar">
        </div>
      </div>
      <div class="tweets-header-brief">
        <p class="tweets-account-name">{{ accountName }}</p>
        <span class="tweets-time">{{ tweetsTime }}</span>
      </div>
      <div class="tweets-actions">
        <main-button :toggle="false" :button-name-list="['关注+', '已关注']" button-size="small"></main-button>
        <!--<div>-->
          <!--<button class="tweets-action-more"></button>-->
          <!--<ul>-->
            <!--<li></li>-->
            <!--<li></li>-->
            <!--<li></li>-->
            <!--<li></li>-->
            <!--<li></li>-->
          <!--</ul>-->
        <!--</div>-->
      </div>
    </div>
    <div class="tweets-body">
      <div class="tweets-body-brief" :class="[isMore? 'more':'less']">
        <p ref="bodyBrief">{{ tweetsBrief }}</p>
      </div>
      <flat-button
        class="more-or-less"
        v-show="isLongBrief"
        button-color="white"
        button-size="medium"
        @getClickStatus="_moreOrLess"
        :button-name-list="['全文', '收起']"
        :toggle="true"></flat-button>
      <div class="tweets-body-content">
        <ul class="images" v-if="isImageList">
          <li v-for="item in data.imageList" @click="_emitTargetInfo($event)">
            <img v-lazy="item.url" :alt="item.index" :index="item.index">
          </li>
        </ul>
        <div class="video" v-if="isVideo">
          <video-pre-viewer
            width="293"
            :video-type="data.videoType"
            :video-src="data.videoSrc"
            :poster-src="data.posterSrc">
          </video-pre-viewer>
        </div>
      </div>
    </div>
    <div class="tweets-tail">
      <ul class="tweets-actions">
        <li class="tweets-action tweets-action-thumbup" @click="_thumbup">
          <i class="material-icons md-36" :class="{active: isThumbUp}">thumb_up</i>
          <span class="thumbup-num">{{ thumbupNum }}</span>
        </li>
        <li class="tweets-action tweets-action-commits" @click="_checkCommit">
          <i class="material-icons md-36">chat</i>
          <span class="commits-num">{{ commitsNum }}</span>
        </li>
        <li class="tweets-action tweets-action-forward" @click="_forwardTweets">
          <i class="material-icons md-36">launch</i>
          <span class="forward-num">{{ forwardNum }}</span>
        </li>
      </ul>
      <div class="tweets-api">
        <span @click="_shareTweets">
          <i class="material-icons md-36">share</i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
    import MainButton from "../Button/MainButton";
    import FlatButton from "../Button/FlatButton";
    import VideoPreViewer from "../Viewer/VideoPreViewer";

    export default {
      components: {
        VideoPreViewer,
        FlatButton,
        MainButton},
      name: "tweets-card",
      data() {
        return {
          accountName: '姜维',
          tweetsTime: '2018-3-31',
          thumbupNum: 50,
          commitsNum: 50,
          forwardNum: 1,
          tweetsBrief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid aperiam atque autem beatae delectus doloribus eaque eum facilis harum iste laboriosam natus non numquam, quas, reprehenderit sit suscipit tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid aperiam atque autem beatae delectus doloribus eaque eum facilis harum iste laboriosam natus non numquam, quas, reprehenderit sit suscipit tenetur.',
          isThumbUp: false,
          isLongBrief: false,
          isMore: false,
        }
      },
      props: {
        data: {
          type: Object,
          required: true
        }
      },
      computed: {
        isImageList() {
          return this.data.type === 'images'
            ? true
            : false
        },
        isVideo() {
          return this.data.type === 'video'
            ? true
            : false
        }
      },
      methods: {
        _emitTargetInfo(e) {
          let screeWith = document.documentElement.offsetWidth || document.body.offsetWidth,
            target = e.target,
            data = {}
          data = this.isImageList
            ? {index: e.target.getAttribute('index'),
              left: target.offsetLeft,
              top: target.offsetTop,
              width:target.offsetWidth,
              height: target.offsetHeight,
              scale: target.offsetWidth/screeWith,
              type: this.data.type,
              imageList: this.data.imageList}
            : {}
          this.$emit('getTargetInfo',data)
        },
        _thumbup() {
          let direction = this.isThumbUp? -1:1
          this.thumbupNum += direction
          this.isThumbUp = !this.isThumbUp
        },
        _checkCommit() {},
        _forwardTweets() {},
        _shareTweets() {},
        _moreOrLess(status) {
          this.isMore = status
        }
      },
      mounted() {
        this.$nextTick(function () {
          this.isLongBrief = this.$refs.bodyBrief.offsetHeight > 65? true:false
          console.log(this.isLongBrief)
        })
      }
    }
</script>

<style type="text/stylus" rel="stylesheet/stylus" lang="stylus" scoped>
  @import "./TweetsCard.styl"
</style>
