<template>
  <div class="fans">
    <div class="nav-panel-wrapper">
      <div class="nav-panel">
        <span class="nav-header action-backward" @click="_backward">
          <i class="material-icons md-56 md-light">keyboard_arrow_left</i>
        </span>
        <div class="nav-body panel">
          <p>粉丝</p>
        </div>
        <div class="nav-tail blank"></div>
      </div>
    </div>
    <scroll
      class="fans-content">
        <img-collect-item
          v-for="item in fansData"
          @getClickStatus="_link(item.userId)"
          :key="item.nickname"
          :img-url="item.avatarUrl"
          :item-name="item.nickname"
          :item-intro="item.signature"
          item-type="fans">
        </img-collect-item>
    </scroll>
  </div>
</template>

<script>
  import ImgCollectItem from "../base/CollectItem/ImgCollectItem";
  import Scroll from "../base/Scroll/Scroll"
  import api from '../../api/login'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      ImgCollectItem,
      Scroll
    },
    name: "fans",
    data() {
      return {
        tailIconName: 'more_horiz',
        fromPath: '/account',
        fansData: []
      }
    },
    computed: {
      ...mapGetters(['uId'])
    },
    methods: {
      _formatFans(fans) {
        this.fansData = fans
      },
      _backward() {
        this.$router.push({path: this.fromPath, query: {transition: 'slide-left'}})
      },
      _link(id) {
        this.$router.push({path: `/user/${id}`, query: {transition: 'slide-right'}})
      }
    },
    created() {
      api.GetFansData(this.uId)
      .then((res) => {
        this._formatFans(res.data.followeds)
      })
    }
  }
</script>

<style type="text/stylus" rel="stylesheet/stylus" lang="stylus" scoped>
  @import "./Fans.styl"
</style>
