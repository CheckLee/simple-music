<template>
  <div class="user-homepage">
    <div class="user-homepage-header nav-panel-wrapper">
      <div class="nav-panel">
            <span class="nav-header action-backward">
              <i class="material-icons md-56 md-light">keyboard_arrow_left</i>
            </span>
        <div class="nav-body panel">
          <p>{{ userInfo.userName }}</p>
        </div>
        <div class="nav-tail blank"></div>
      </div>
    </div>
    <div class="user-homepage-body">
      <section class="homepage-bg">
        <div class="homepage-accountInfo">
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
        </div>
        <div class="bg">
          <img :src="userInfo.userBgUrl" alt="background">
        </div>
      </section>
      <scroll
        class="user-homepage-content">
        <section class="homepage-user-subcount">
          <div class="homepage-routerlink">
            <router-link class="tab-item" tag="div" to="/foundmusic/recommend">
              <span class="tab-link">音乐</span>
              <span>{{ userInfo.userPlayListNum }}</span>
            </router-link>
            <router-link class="tab-item" tag="div" to="/foundmusic/songlist">
              <span class="tab-link">动态</span>
              <span>{{ userInfo.userTweetsNum }}</span>
            </router-link>
          </div>
          <div class="homepage-cards">
            <keep-alive>
              <router-view></router-view>
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
        }
      }
    },
    methods: {
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
      }
    },
    created() {
      // login.GetUserDetail(this.id)
        // .then((res) => {
          // console.log(res)
        // })
    }
}
</script>

<style rel="stylesheet/stylus" lang="stylus" type="text/stylus" scoped>
  @import "./UserHomepage.styl"
</style>
