<template>
  <div class="followers">
    <div class="nav-panel-wrapper">
      <div class="nav-panel">
        <span class="nav-header action-backward" @click="_backward">
          <i class="material-icons md-56 md-light">keyboard_arrow_left</i>
        </span>
        <div class="nav-body panel">
          <p>关注</p>
        </div>
        <div class="nav-tail blank"></div>
      </div>
    </div>
    <scroll class="followers-content">
      <div>
        <li
          v-for="item in followerData"
          is="ImgCollectItem"
          :key="item.nickname"
          :img-url="item.avatarUrl"
          :item-name="item.nickname"
          :item-intro="item.signature"
          item-type="fans">
        </li>
        <div class="blank"></div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import ImgCollectItem from "../base/CollectItem/ImgCollectItem";
  import Scroll from "../base/Scroll/Scroll"
  import api from "../../api/login"
  import { mapGetters } from "vuex"

  export default {
    components: {
      ImgCollectItem,
      Scroll},
    name: "followers",
    data() {
      return {
        tailIconName: 'more_horiz',
        fromPath: '/account',
        followerData: []
      }
    },
    computed: {
      ...mapGetters(['uId'])
    },
    methods: {
      _backward() {
        this.$router.push({path: this.fromPath, query: {transition: 'slide-left'}})
      },
      _formatFollowData(followers) {
        this.followerData = followers
      }
    },
    created() {
      api.GetFollowsData(this.uId)
        .then((res) => {
          this._formatFollowData(res.data.follow)
        })
    }
  }
</script>

<style type="text/stylus" rel="stylesheet/stylus" lang="stylus" scoped>
  @import "./Followers.styl"
</style>
