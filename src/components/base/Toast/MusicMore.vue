<template>
  <div class="music-collect-toast">
    <ul>
      <li class="music-info">
        <p>歌曲：<span></span></p>
      </li>
      <li>
        <i class="material-icons">update</i>
        <p>下一首播放</p>
      </li>
      <li>
        <i class="material-icons">chat</i>
        <p>评论(<span></span>)</p>
      </li>
      <li>
        <i class="material-icons">person</i>
        <p>歌手：<span></span></p>
      </li>
      <li>
        <i class="material-icons" v-show="isMV">ondemand_video</i>
        <p>查看视频</p>
      </li>
      <li>
        <i class="material-icons">album</i>
        <p>专辑：<span></span></p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "MusicMore"
    }
</script>

<style scoped>

</style>
