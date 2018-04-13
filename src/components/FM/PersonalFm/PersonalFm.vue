<template>
	<div class="personal-fm">
    <div class="blur-wrapper" v-if="this.currentSong">
      <img :src="currentSong.picUrl" class="blur-pic" alt="">
    </div>
    <div class="pic-wrapper">
      <img :src="currentSong.picUrl" class="pic" alt="">
    </div>
    <div class="song">{{ currentSong.name }}</div>
    <div class="singer">
      <span class="name">{{ currentSong.singers }}</span>
      <i class="material-icons">chevron_right</i>
    </div>
    <div class="prograss">
      <span class="cur-time">{{ curTime }}</span>
      <span class="song-time">{{ formatTime(currentSong.duration) }}</span>
    </div>
    <div class="handlers">
      <i class="material-icons info">delete</i>
      <i class="material-icons skip">skip_previous</i>
      <i class="material-icons play" v-if="!isPlaying" @click="togglePlaying">play_circle_outline</i>
      <i class="material-icons play" v-else @click="togglePlaying">pause_circle_outline</i>
      <i class="material-icons skip">skip_next</i>
      <i class="material-icons info">message</i>
    </div>
    <audio ref="audio" :src="currentSongUrl"
           @play="ready" @error="error"
           @timeupdate="updateTime"></audio>
  </div>
</template>

<script>
  import api from 'api/song'
  import { mapMutations } from 'vuex'
  
  export default {
    name: "",
    created() {
      api.GetPersonalFM().then(res => {
        if (res.data.code === 200) {
          // console.log(res.data)
          this.setFMPlayList(res.data.data)
          this.currentList = res.data.data
          this.currentSong = this._formatSong(this.currentList[0])
          api.GetSong(this.currentSong.id).then(res => {
            if (res.data.code === 200) {
              console.log(res.data.data[0].url)
              this.currentSongUrl = res.data.data[0].url
              this.isPlaying = true
            }
          })
          
          // 先不格式化数据存储，而是全部存进去
          /*let currentList = []
          let songInfo = {}
          for(let song of res.data.data) {
            songInfo.name = song.name
            songInfo.id = song.id
            songInfo.duration = song.duration
            songInfo.singers = ''
            for (let artist of song.artists) {
              if (songInfo.singers) {
                songInfo.singers += `/${artist.name}`
              } else {
                songInfo.singers = artist.name
              }
            }
            songInfo.picUrl = song.album.picUrl
            // 拷贝对象内容，防止对象指向相同
            let copy = Object.assign({}, songInfo)
            currentList.push(copy)
          }*/
        }
      })
    },
    data() {
      return {
        isPlaying: false,
        currentList: [],
        currentSong: {},
        currentSongUrl: '',
        currentTime: 0,
        songReady: false
      }
    },
    filters: {
      //
    },
    methods: {
      ...mapMutations({
        'setFMPlayList': 'SET_FM_PLAYLIST'
      }),
      // 格式化从api读取的数据
      _formatSong(song) {
        let singers = ''
        for (let artist of song.artists) {
          if (singers) {
            singers += `/${artist.name}`
          } else {
            singers = artist.name
          }
        }
        return {
          name: song.name,
          id: song.id,
          duration: song.duration,
          picUrl: song.album.picUrl,
          singers: singers
        }
      },
      // 格式化时间数据
      formatTime(timestamp) {
        // 向下取整
        if (timestamp / 1000 > 0) {
          timestamp = parseInt(timestamp) / 1000 | 0
        } else {
          timestamp = parseInt(timestamp) | 0
        }
    
        const m = timestamp / 60 | 0
        let s = timestamp % 60
        let len = s.toString().length
        while(len < 2) {
          s = '0' + s
          len ++
        }
        return `${m}:${s}`
      },
      
      /* audio 方法 */
      // 也就是说 当src有了以后，audio就可以play了
      ready() {
        this.songReady = true
      },
      error() {
        this.songReady = true
      },
      updateTime(e) {
        this.currentTime = e.target.currentTime
      },
      togglePlaying() {
        if (!this.songReady) {
          return
        }
        this.isPlaying = !this.isPlaying
      },
      
      // 时间格式化补零
      _pad(num, n = 2) {
        let len = num.toString().length
        while(len < n) {
          num = '0' + num
          len ++
        }
        return num
      }
    },
    computed: {
      curTime() {
        let timestamp = parseInt(this.currentTime)
        const m = timestamp / 60 | 0
        let s = timestamp % 60
        let len = s.toString().length
        while(len < 2) {
          s = '0' + s
          len ++
        }
        return `${m}:${s}`
      }
    },
    watch: {
      isPlaying(newState) {
        const audio = this.$refs.audio
        this.$nextTick(() => {
          newState ? audio.play() : audio.pause()
        })
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "PersonalFm.styl"
</style>
