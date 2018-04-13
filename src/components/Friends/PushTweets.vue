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
      <div class="hottopics">
        <swiper :options="swiperOption" class="hottopics-swiper">
          <swiper-slide v-for="slide in hotTopicsImageList" :key="slide.index" class="hottopics-slide">
            <div class="hottopics-content-wrapper">
              <div class="hottopics-content">
                <p class="content">{{ slide.content }}</p>
                <p class="type">{{ slide.type }}</p>
              </div>
              <img :data-src="slide.url" class="swiper-lazy">
            </div>
            <div class="swiper-lazy-preloader-imgview">
              <inf-circle-loader class="inf-preloader" size="large" color="white"></inf-circle-loader>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <tweets-card @getTargetInfo="_getTargetInfo" :data="data1"></tweets-card>
      <tweets-card @getTargetInfo="_getTargetInfo" :data="data2"></tweets-card>
      <tweets-card @getTargetInfo="_getTargetInfo" :data="data3"></tweets-card>
      <div class="blank"></div>
    </scroll>
  </div>
</template>

<script>
  import ImgPreViewer from "../base/Viewer/ImgPreViewer";
  import InfCircleLoader from "../base/Loader/InfCircleLoader";
  import TweetsCard from "../base/CollectItem/TweetsCard";
  import Scroll from "../base/Scroll/Scroll";
  import { swiper, swiperSlide } from 'vue-awesome-swiper';

  export default {
    components: {
      Scroll,
      TweetsCard,
      InfCircleLoader,
      ImgPreViewer,
      swiper,
      swiperSlide},
    name: "pushtweets",
    data() {
      return {
        show: false,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          lazy: {
            loadPrevNext: true,
            preloaderClass: 'swiper-lazy-preloader-imgview',
          },
          initialSlide : 0,
          slidesPerView : 2,
          centeredSlides : false,
        },
        hotTopicsImageList:[
          { content: '#来欣赏樱花#', type: '音乐', index: 0, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_unloadimg.png' },
          { content: '#来欣赏樱花#', type: '音乐', index: 1, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_avatar.png' },
          { content: '#来欣赏樱花#', type: '音乐', index: 3, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_unloadimg.png' },
          { content: '#来欣赏樱花#', type: '音乐', index: 4, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_avatar.png' },
          { content: '#来欣赏樱花#', type: '音乐', index: 6, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_unloadimg.png' },
          { content: '#来欣赏樱花#', type: '音乐', index: 7, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/default_avatar.png' },
          { content: '#来欣赏樱花#', type: '音乐', index: 8, url: 'https://raw.githubusercontent.com/JiangWeixian/simple-music/dev/src/assets/img/test_longpics.jpg' }
        ],
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
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./PushTweets.styl"
</style>
