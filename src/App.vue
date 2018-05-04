<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <player-button class="player-button" v-show="playButtonShow"></player-button>
    <div class="bottom-wrapper" :class="{ 'hide': !playButtonShow }">
      <bottom-panel></bottom-panel>
    </div>
    <transition name="pullup">
      <justify-order v-if="isJustifyOrder" class="justify-order"></justify-order>
    </transition>
    <transition name="slide">
      <fm v-show="isFM"></fm>
    </transition>
  </div>
</template>

<script>
  import BottomPanel from 'base/BottomPanel/BottomPanel'
  import JustifyOrder from 'components/JustifyOrder/JustifyOrder'
  import PlayerButton from 'base/Button/PlayerButton'
  import Fm from 'components/FM/Fm'
  import api from 'api/login'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'App',
    data() {
      return {
        playButtonShow: true,
        routerMap: ['loginin', 'signup'],
        transitionName: 'pop-up'
      }
    },
    watch: {
      '$route'(to, from) {
        this.transitionName = to.query['transition']
        this.playButtonShow = this.routerMap.indexOf(to.path.split('/')[1].toLowerCase()) > -1? false:true
      }
    },
    components: {
      BottomPanel, JustifyOrder, PlayerButton, Fm
    },
    created() {
      this.playButtonShow = this.routerMap.indexOf(this.$route.path.split('/')[1].toLowerCase()) > -1? false:true
      if (!this.isLogin ) {
        this.$store.dispatch('updateLoginStatus')
          .then((success) => {
            console.log('login success')
          }
          , (error) => {
            this.$router.push({path: '/loginin', query: {transition: 'pop-up'}})
            })
      }
    },
    computed: {
      ...mapGetters([ 'isLogin', 'isJustifyOrder', 'isPlayer', 'isFM', 'currentPlayer' ])
    },
    methods: {
      ...mapMutations({
        setCurrentUserId: 'SET_CURRENT_USER_ID'
      })
    }
  }
</script>

<style>
  #app {
    z-index: 0;
    height: 100%;
    width: 100%;
  }
  .player-button {
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 1;
  }
  .bottom-wrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 112px;
    z-index: 1;
  }
  .bottom-wrapper.hide {
    z-index: -1
  }
  .blank {
    height: 112px;
    width: 100%;
  }
  .pullup-enter-active, .pullup-leave-active {
    transition: all 0.4s
  }
  .pullup-enter, .pullup-leave-to {
    transform: translate3d(0, 100%, 0);
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 0.4s
  }
  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  body.preview {
    overflow: hidden;
  }
  .swiper-pagination-bullet-imgview{
    width: 8px;
    height: 8px;
    margin: 0 5px;
    display: inline-block;
    border-radius: 100%;
    background: white;
    opacity: 0.2;

  }
  .swiper-pagination-bullet-imgview-active {
    opacity: 1;
  }
  .swiper-lazy-preloader-imgview {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
  }
  .img-view-swiper {
    height: 100%;
  }
  .img-view-slide {
    height: 100%;
    overflow: auto;
  }
  .tweets.preview, .push-tweets.preview, user-homepage-tweets.preview {
    z-index: 2000;
    top: 0px!important;
  }

  .personal-tweets.preview {
    z-index: 2000;
    top: -104px!important;
  }

  .pop-up-enter-active, .pop-up-leave-active {
    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: translateY(0px);
    opacity: 1;
  }

  .pop-up-enter, .pop-up-leave-active {
    transform: translateY(100%);
    opacity: 0;
  }

  .slide-left-enter-active, .slide-left-leave-active {
    transition: transform .5s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: translateX(0);
    opacity: 1;
  }
  .slide-right-enter-active, .slide-right-leave-active {
    transition: transform .5s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: translateX(0);
    opacity: 1;
  }

  .slide-left-enter, .slide-left-leave-active {
    opacity: 0;
    transform: translateX(-100%);
  }
  .slide-right-enter, .slide-right-leave-active {
    opacity: 0;
    transform: translateX(100%);
  }

  .display-enter-active, .display-leave-active {
    transition: opacity 0s 0s;
    opacity: 1;
  }

  .display-enter, .display-leave-active {
    opacity: 0;
  }
</style>
