<template>
	<div class="bottom-panel">
    <div class="bottom-bg"></div>
    <div class="bottom-items">
      <router-link class="bottom-item" tag="div" to="/foundmusic">
        <i class="icon material-icons md-light md-inactive">library_music</i>
        <span class="bottom-link">发现</span>
      </router-link>
      <router-link class="bottom-item" tag="div" to="/mine">
        <i class="icon material-icons md-light md-inactive">music_note</i>
        <span class="bottom-link">我的</span>
      </router-link>
      <router-link class="bottom-item" tag="div" to="/friends">
        <i class="icon material-icons md-light md-inactive">group</i>
        <span class="bottom-link">朋友</span>
      </router-link>
      <router-link class="bottom-item" tag="div" to="/account">
        <i class="icon material-icons md-light md-inactive">person</i>
        <span class="bottom-link">帐号</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "BottomPanel.styl"
</style>
