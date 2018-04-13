<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player-button class="player-button"></player-button>
    <div class="bottom-wrapper">
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
    components: {
      BottomPanel, JustifyOrder, PlayerButton, Fm
    },
    created() {
      api.Login('18810712875', 'L2907685').then(res => {
        if (res.data.code === 200) {
          this.setCurrentUserId(res.data.account.id)
        }
      })
    },
    computed: {
      ...mapGetters([ 'isJustifyOrder', 'isPlayer', 'isFM', 'currentPlayer' ])
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
  .tweets.preview, .push-tweets.preview {
    z-index: 2000;
    top: 0px!important;
  }
</style>
