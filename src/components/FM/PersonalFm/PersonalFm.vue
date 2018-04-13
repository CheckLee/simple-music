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
    <div class="progress">
      <span class="cur-time">{{ curTime }}</span>
      <div class="progress-bar-wrapper" ref="progressBarWrapper" @click="progressClick">
        <div class="progress-bar" ref="progressBar">
          <div class="progress" ref="progress"></div>
          <div class="progress-dot-wrapper" ref="progressDot">
               <!--@touchstart.prevent="progressTouchStart"
               @touchmove.prevent="progressTouchMove"
               @touchend="progressTouchEnd"-->
            <div class="progress-dot" ref="progressBtn"></div>
          </div>
        </div>
      </div>
      <span class="song-time">{{ formatTime(currentSong.duration) }}</span>
    </div>
    <div class="handlers">
      <i class="material-icons info">delete</i>
      <i class="material-icons skip">star_border</i>
      <i class="material-icons play" v-if="!isPlaying" @click="togglePlaying">play_circle_outline</i>
      <i class="material-icons play" v-else @click="togglePlaying">pause_circle_outline</i>
      <i class="material-icons skip" @click="next">skip_next</i>
      <i class="material-icons info">message</i>
    </div>
    <audio ref="audio" :src="currentSongUrl"
           @play="ready" @error="error"
           @timeupdate="updateTime"></audio>
  </div>
</template>

<script>
  import api from 'api/song'
  import { mapGetters, mapMutations } from 'vuex'
  
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
              this.currentSongUrl = res.data.data[0].url
              // 这里要改，在点击 私人FM 的时候触发
              // this.isPlaying = true
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
        currentList: [],
        currentSong: {},
        currentSongUrl: '',
        currentSongIndex: 0,
        currentTime: 0,
        songReady: false,
        
        // progress 数值
        // percent: 0.5
      }
    },
    methods: {
      ...mapMutations({
        'setFMPlayList': 'SET_FM_PLAYLIST',
        'setIsPlaying': 'SET_IS_PLAYING'
      }),
      _getSong(id) {
        api.GetSong(id).then(res => {
          if (res.data.code === 200) {
            this.currentSongUrl = res.data.data[0].url
            this.setIsPlaying(true)
          }
        })
      },
      next() {
        // 控制audio组件，当还未准备好的时候，不能点！
        if (!this.songReady) {
          return
        }
        this.currentSongIndex++
        
        this.currentSong = this._formatSong(this.currentList[this.currentSongIndex])
        this._getSong(this.currentSong.id)
        // 如果当前播放状态是暂停，那么改成播放
        if (!this.isPlaying) {
          this.togglePlaying()
        }
        this.songReady = true
        if (this.currentSongIndex === 2) {
          api.GetPersonalFM().then(({ data }) => {
            console.log(data)
            if (data.code === 200) {
              this.setFMPlayList(data.data)
              this.currentList = data.data
              this.currentSongIndex = -1
            }
          })
        }
      },
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
      
      /* progress 方法 */
      progressClick() {},
      
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
        this.setIsPlaying(!this.isPlaying)
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
      ...mapGetters([
        'isPlaying'
      ]),
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
      },
      // 计算当前播放进度百分比，来控制progress-bar
      percent() {
        return parseInt(this.currentTime) / (this.currentSong.duration / 1000)
      }
    },
    watch: {
      // 当URL变化时，audio进行播放
      currentSongUrl(newUrl, oldUrl) {
        // console.log(oldUrl)
        if (oldUrl !== '') {
          this.$nextTick(() => {
            this.$refs.audio.play()
          })
        }
      },
      // 控制audio播放暂停
      isPlaying(newState) {
        const audio = this.$refs.audio
        this.$nextTick(() => {
          newState ? audio.play() : audio.pause()
        })
      },
      // progress进度条长度
      percent(newPercent) {
        if (newPercent >= 0) {
          const barWidth = this.$refs.progressBar.clientWidth
          const offsetWidth = newPercent * barWidth
          this.$refs.progress.style.width = `${offsetWidth}px`
        }
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "PersonalFm.styl"
</style>
