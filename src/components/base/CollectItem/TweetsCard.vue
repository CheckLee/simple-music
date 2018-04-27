<template>
  <div class="card tweets-card" @click="_dropup" ref="tweetsCard">
    <div class="tweets-header">
      <div class="tweets-account-avatar">
        <div class="img">
          <img :src="data.user.avatarUrl" :alt="data.user.accountName">
        </div>
      </div>
      <div class="tweets-header-brief">
        <p class="tweets-account-name">{{ data.user.accountName }}</p>
        <span class="tweets-time">{{ this._formatDate(data.tweetsTime) }}</span>
      </div>
      <div class="tweets-actions" v-if="false">
        <main-button
          v-if="false"
          :toggle="true"
          :button-name-list="['关注+', '取消关注']"
          button-size="small">
        </main-button>
        <div v-else>
          <span class="tweets-actions-more" @click.stop="_dropdown">
            <i class="material-icons md-36">more_vert</i>
          </span>
          <ul class="dropdown-menu" :class="{'dropdown': isDropdown}">
            <li>
              <i class="material-icons md-36">visibility_off</i>
              <span>不再关注</span>
            </li>
            <li>
              <i class="material-icons md-36">account_circle</i>
              <span>设置备注</span>
            </li>
            <li>
              <i class="material-icons md-36">email</i>
              <span>私信</span>
            </li>
            <li>
              <i class="material-icons md-36">report_problem</i>
              <span>举报</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tweets-body">
      <div class="tweets-body-brief" :class="{ more: isMore, less: !isMore && isLongBrief }">
        <p ref="bodyBrief">{{ data.msg }}</p>
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
          <li v-for="item in data.pics" @click="_emitTargetInfo($event)">
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
        <div class="shared" v-if="isShared">
          <share-item
            :avatar-url="data.shared[data.shared.type].avatarUrl"
            :item-type="data.shared.type"
            :item-title="data.shared.title"
            :item-sub-title="data.shared.creator.accountName">
          </share-item>
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
          <span class="commits-num">{{ data.commitNum }}</span>
        </li>
        <li class="tweets-action tweets-action-forward" @click="_forwardTweets">
          <i class="material-icons md-36">launch</i>
          <span class="forward-num">{{ data.forwardNum }}</span>
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
    import ShareItem from "../CollectItem/ShareItem";


    export default {
      components: {
        VideoPreViewer,
        FlatButton,
        MainButton,
        ShareItem},
      name: "tweets-card",
      data() {
        return {
          thumbupNum: 0,
          isThumbUp: false,
          isLongBrief: false,
          isMore: false,
          isDropdown: false
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
          return this.data.isPics
        },
        isVideo() {
          return this.data.type === 'video'
            ? true
            : false
        },
        isShared() {
          return this.data.isShared
        }
      },
      watch: {
        isThumbUp(val, oldVal) {
          if (val) {
            this.thumbupNum += 1
          }
          else {
            this.thumbupNum -= 1
          }
        }
      },
      methods: {
        _emitTargetInfo(e) {
          let screeWidth = document.documentElement.offsetWidth || document.body.offsetWidth,
            target = e.target,
            data = {}
          data = this.isImageList
            ? {index: e.target.getAttribute('index'),
              left: target.offsetLeft,
              top: this.$refs.tweetsCard.offsetTop + target.offsetTop + 52,
              width:target.offsetWidth,
              height: target.offsetHeight,
              scale: target.offsetWidth/screeWidth,
              isImageList: this.isImageList,
              imageList: this.data.pics}
            : {}
          this.$emit('getTargetInfo',data)
        },
        _formatDate(date) {
          let localeDateString = new Date(date).toLocaleDateString().split('/').join('-')
          return localeDateString
        },
        _dropdown() {
          this.isDropdown = true
        },
        _dropup() {
          this.isDropdown = false
        },
        _thumbup() {
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
          this.isLongBrief = this.$refs.bodyBrief.offsetHeight > 63? true:false
        })
      },
      created() {
        this.thumbupNum = this.data.thumbupNum
      }
    }
</script>

<style type="text/stylus" rel="stylesheet/stylus" lang="stylus" scoped>
  @import "./TweetsCard.styl"
</style>
