<template>
  <div class="friends">
    <div class="nav-panel-wrapper" @click="_test">
      <div class="nav-panel">
        <span class="nav-header action-add">
          <i class="material-icons md-56 md-light">person_add</i>
        </span>
        <div class="nav-body panel">
          <ul class="nav-body-routerlink" :class="{ 'active': isSlide }">
            <li>
              <router-link tag="div" to="/friends/tweets">
                <span>关注</span>
              </router-link>
            </li>
            <li>
              <router-link tag="div" to="/friends/pushtweets">
                <span>推荐</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="nav-tail blank"></div>
      </div>
    </div>
    <transition :name="slideType">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import api from '../../api/tweets'

  export default {
    name: "friends",
    data() {
      return {
        routerMap: ['tweets', 'pushtweets'],
        slideType: 'slide-right'
      }
    },
    watch: {
      '$route' (to, from) {
        if (this.routerMap.indexOf(from.name.toLowerCase()) > - 1) {
          let slideType = this.routerMap.indexOf(to.name.toLowerCase()) > this.routerMap.indexOf(from.name.toLowerCase())
            ? 'slide-left'
            : 'slide-right'
          this.slideType = slideType
        }
      }
    },
    computed: {
      isSlide() {
        return this.slideType === 'slide-left'? true:false
      }
    },
    methods: {
      _test() {
        api.GetEvent()
          .then((res) => {
            console.log(res)
          })
        // api.GetUserDetail(9861246)
        // .then((res) => {
        //   console.log(res)
        // })
      }
    },
    created() {
      this.slideType = this.$route.name.toLowerCase() === 'tweets'? 'slide-right': 'slide-left'
      api.GetEvent()
      .then((res) => {
        console.log(res)
      })
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./Friends.styl"
</style>
