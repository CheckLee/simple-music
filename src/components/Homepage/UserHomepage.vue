<template>
  <div class="user-homepage">
    <div class="user-homepage-header nav-panel-wrapper" ref="nav">
      <div class="nav-panel">
        <span class="nav-header action-backward" @click="_backward">
          <i class="material-icons md-56 md-light">keyboard_arrow_left</i>
        </span>
        <div class="nav-body panel">
          <p v-show="isTitle">{{ userInfo.userName }}</p>
        </div>
        <div class="nav-tail blank"></div>
        <div class="bg" v-show="isCover">
          <img :src="userInfo.userBgUrl" alt="background">
        </div>
      </div>
    </div>
    <div class="homepage-routerlink" :style="routerStyle" ref="links">
      <router-link class="tab-item" tag="div" :to="musicPath">
        <span class="tab-link">音乐</span>
        <span>{{ userInfo.userPlayListNum }}</span>
      </router-link>
      <router-link class="tab-item" tag="div" :to="tweetsPath">
        <span class="tab-link">动态</span>
        <span>{{ userInfo.userTweetsNum }}</span>
      </router-link>
    </div>
    <div class="user-homepage-body" :class="{'preview': isEndScroll}">
      <section class="homepage-bg" ref="bkg">
        <div class="bg">
          <img :src="userInfo.userBgUrl" alt="background">
        </div>
      </section>
      <scroll
        :probeType="3"
        :listenScroll="isListenScroll"
        :isEndScroll="isEndScroll"
        @scroll="_getCurrentPos"
        class="user-homepage-content">
        <section class="homepage-accountInfo" ref="account">
          <div class="account-avatar"><img :src="userInfo.userAvatarUrl" alt="account-avatar"></div>
          <div class="account-brief">
            <div class="row account-name">
              <h1>{{ userInfo.userName }}</h1>
            </div>
            <ul class="row account-detail">
              <li class="account-level">
                <p>等级</p>
                <span><i>Lv </i>{{ userInfo.level }}</span>
              </li>
              <li>
                <p>关注</p>
                <span>{{ userInfo.userFollowers }}</span>
              </li>
              <li>
                <p>粉丝</p>
                <span>{{ userInfo.userFans }}</span>
              </li>
            </ul>
            <div class="row account-signature">
              <p>{{ userInfo.userSignature }}</p>
            </div>
          </div>
        </section>
        <section class="homepage-user-subcount" :style="subcountStyle" ref="subcount">
          <div class="homepage-cards">
            <keep-alive>
              <router-view
                :scroll-y="scrollY"
                :viewer-offset-y="accountTop"
                :page-offset-y="subcountTop"
                @getPreviewStatus="_getPreviewStatus">
              </router-view>
            </keep-alive>
          </div>
        </section>
      </scroll>
    </div>
  </div>
</template>

<script>
  import login from '../../api/login'
  import Scroll from "../base/Scroll/Scroll"

  export default {
    name: "UserHomepage",
    components: {
      Scroll
    },
    props: ['id'],
    data() {
      return {
        name: 'UserHomepage',
        fromPath: '/',
        userInfo: {
          level: 9,
          userName: '姜维',
          userFollowers: 18,
          userFans: 5,
          userSignature: '我会努力的',
          userTweetsNum: 14,
          userPlayListNum: 41,
          userAvatarUrl: require("../../assets/img/default_avatar.png"),
          userBgUrl: require("../../assets/img/default_user_bg.jpg")
        },
        // config for scroll
        isListenScroll: true,
        screenHeight: 0,
        scrollY: 0,
        maxScrollY: 173,
        isEndScroll: false,
        // config for navpanel
        navHeight: 52,
        // config for links
        linksHeight: 0,
        // config for account
        accountTop: 77,
        // config for subcount
        subcountTop: 0
      }
    },
    watch: {
      scrollY(val, oldVal) {
        let maxScrollY = 120
        if (val > 0) {
          let scale = 1 + (val/maxScrollY)
          Velocity(this.$refs.bkg, { scaleX: scale, scaleY: scale }, { duration: 0 })
        }
      },
      id(val, oldVal) {
        login.GetUserDetail(val)
          .then((res) => {
            this._formatUserInfo(res.data)
            this.$router.push({path: `/user/${val}/music`})
          })
      },
      '$route'(to, from) {
        console.log(from)
        if (!this._filter(from)) {
          this.fromPath = from.path
        }
      }
    },
    computed: {
      routerStyle() {
        let top = 400
        if (this.scrollY < -this.maxScrollY) {
          top = this.navHeight
        }
        else {
          top = this.scrollY+this.maxScrollY + this.navHeight
        }
        return {
          position: 'fixed',
          zIndex: 1,
          top: `${top}px`
        }
      },
      subcountStyle() {
        return {
          paddingTop: `${this.linksHeight}px`
        }
      },
      musicPath() {
        return `/user/${this.id}/music`
      },
      tweetsPath() {
        return `/user/${this.id}/tweets`
      },
      isTitle() {
        return this.scrollY <= -this.maxScrollY? true:false
      },
      isCover() {
        return this.scrollY < 0? true:false
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.navHeight = this.$refs.nav.offsetHeight
        this.linksHeight = this.$refs.links.offsetHeight
        this.accountTop = this.$refs.account.offsetTop
        this.subcountTop = this.$refs.subcount.offsetTop
        this.maxScrollY = this.$refs.account.offsetHeight + this.accountTop - this.navHeight
      })
    },
    methods: {
      _filter(route) {
        return route.name && (route.name == 'UserHomepageMusic' || route.name == 'UserHomepageTweets')
      },
      _backward() {
        this.$router.push({path: this.fromPath, query: {transition: 'slide-left'}})
      },
      _getPreviewStatus(data) {
        this.isEndScroll = data
      },
      _getCurrentPos(data) {
        this.scrollY = data.y
      },
      _formatUserInfo(data) {
        let userInfo = {
          level: data.level,
          userName: data.profile.nickname,
          userFollowers: data.profile.follows,
          userFans: data.profile.followeds,
          userSignature: data.profile.signature,
          userTweetsNum: data.profile.eventCount,
          userPlayListNum: data.profile.playlistCount,
          userAvatarUrl: data.profile.avatarUrl,
          userBgUrl: data.profile.backgroundUrl
        }
        this.userInfo = userInfo
      }
    },
    created() {
      login.GetUserDetail(this.id)
        .then((res) => {
          console.log(res)
          this._formatUserInfo(res.data)
        })
        this.screenHeight = document.documentElement.offsetHeight || document.body.offsetHeight
    }
}
</script>

<style rel="stylesheet/stylus" lang="stylus" type="text/stylus" scoped>
  @import "./UserHomepage.styl"
</style>
