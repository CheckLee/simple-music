<template>
	<div class="personal-fm">
    <div class="pic"></div>
    <div class="song">{{ song.name }}</div>
    <div class="singer">
      <span class="name">{{ song.singer }}</span>
      <i class="material-icons">chevron_right</i>
    </div>
    <div class="prograss">
      <span class="cur-time">{{ curTime }}</span>
      <span class="song-time">{{ song.time }}</span>
    </div>
    <div class="handlers">
      <i class="material-icons info">delete</i>
      <i class="material-icons skip">skip_previous</i>
      <i class="material-icons play" v-if="!isPlaying">play_circle_outline</i>
      <i class="material-icons play" v-else>pause_circle_outline</i>
      <i class="material-icons skip">skip_next</i>
      <i class="material-icons info">message</i>
    </div>
  </div>
</template>

<script>
  import api from 'api/song'
  export default {
    name: "",
    created() {
      api.GetPersonalFM().then(res => {
        if (res.data.code === 200) {
          console.log(res.data)
          let currentList = []
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
          }
          this.currentList = currentList
          this.currentSong = currentList[0]
        }
      }).then()
    },
    data() {
      return {
        isPlaying: false,
        currentList: [],
        currentSong: {},
        song: {
          name: '告白气球',
          singer: '周杰伦',
          time: '04:15'
        },
        curTime: '00:00'
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "PersonalFm.styl"
</style>
