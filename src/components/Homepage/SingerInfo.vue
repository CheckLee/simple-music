<template>
  <div class="singer-info">
    <div class="info">
      <h2>相似歌手</h2>
      <div class="container">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide, index) in simiSingers" :key="index">
            <div class="simisinger" @click="_linkSinger(slide.id)">
              <div class="img-wrapper">
                <img v-lazy="slide.img1v1Url" :alt="slide.name">
              </div>
              <p class="singer-name">
                {{ slide.name }}
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="info">
      <h2>{{ singerName }}简介</h2>
      <pre>{{ brief }}</pre>
    </div>
    <div
      class="info"
      v-for="item in info"
      :key="item.ti">
      <h2>{{ item.ti }}</h2>
      <pre>{{ item.txt }}</pre>
    </div>
  </div>
</template>

<script>
  import song from "../../api/song"
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: "SingerInfo",
    props: ['id', 'singerName'],
    data() {
      return {
        info: [],
        brief: "",
        simiSingers: [1, 2, 3],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          slidesPerView : 4,
          initialSlide : 0,
          observer:true,
        }
      }
    },
    watch: {
      id(val, oldVal) {
        song.GetSinerDesc(val)
          .then((res) => {
            console.log(res)
            this._formatInfo(res.data)
          })
        song.GetSimiSinger(val)
          .then((res) => {
            this._formatSimiSinger(res.data.artists)
          })
      }
    },
    methods: {
      _formatInfo(data) {
        this.info = data.introduction
        this.brief = data.briefDesc
      },
      _formatSimiSinger(data) {
        this.simiSingers = data
      },
      _linkSinger(id) {
        this.$router.push({path: `/singer/${id}`, query: {transition: 'slide-right'}})
      }
    },
    created() {
      song.GetSinerDesc(this.id)
        .then((res) => {
          console.log(res)
          this._formatInfo(res.data)
        })
      song.GetSimiSinger(this.id)
        .then((res) => {
          this._formatSimiSinger(res.data.artists)
        })
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" type="text/stylus" scoped>
  @import "./SingerInfo.styl"
</style>
