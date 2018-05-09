<template>
  <div class="music-collect-item" @click="_startPlay">
    <div class="music-collect-item-wrapper">
      <div class="music-collect-item-header">
        <span v-show="isList">1</span>
        <i class="material-icons md-48" v-show="isPlay">volume_up</i>
      </div>
      <div class="music-collect-item-body">
        <p>{{ name }}</p>
        <div class="sub-title">
          <span>{{ artistsStr }} - </span>
          <span>{{ albumStr }}</span>
        </div>
      </div>
    </div>
    <div class="music-collect-item-tail">
      <i class="mv material-icons md-48" @click="_linkMV" v-show="isMV">ondemand_video</i>
      <i class="more material-icons md-48">more_horiz</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MusicCollectItem",
    data() {
      return {
        isPlay: false
      }
    },
    props: {
      needIndex: {
        type: Boolean,
        default: false
      },
      needMv: {
        type: Boolean,
        default: false,
      },
      index: {
        type: Number
      },
      mv: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      artists: {
        type: Array,
        required: true
      },
      album: {
        type: Object
      }
    },
    computed: {
      isList() {
        return this.needIndex && !this.isPlay
      },
      isMV() {
        return this.needMv && !!this.mv
      },
      artistsStr() {
        return this.artists.map(item => item.name).join('/')
      },
      albumStr() {
        return this.album.name
      }
    },
    methods: {
      _startPlay() {
        //逻辑不对还要改
        this.isPlay = true
      },
      _linkMV() {
        console.log(this.mv)
      }
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" type="text/stylus" scoped>
  @import "./MusicCollectItem.styl"
</style>
