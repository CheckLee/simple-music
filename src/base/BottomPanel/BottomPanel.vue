<template>
	<div class="bottom-panel">
    <router-link class="bottom-item" tag="div" to="/foundmusic">
      <i class="material-icons md-light md-inactive">library_music</i>
      <span class="tab-link">发现</span>
    </router-link>
    <router-link class="bottom-item" tag="div" to="/mine">
      <i class="material-icons md-light md-inactive">music</i>
      <span class="tab-link">我的</span>
    </router-link>
    <router-link class="bottom-item" tag="div" to="/friends">
      <i class="material-icons md-light md-inactive">group</i>
      <span class="tab-link">朋友</span>
    </router-link>
    <router-link class="bottom-item" tag="div" to="/account">
      <i class="material-icons md-light md-inactive">person</i>
      <span class="tab-link">帐号</span>
    </router-link>
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
