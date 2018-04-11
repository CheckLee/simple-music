<template>
	<div class="rank" ref="rank">
    <scroll class="rank-content">
      <div>
        <official-rank></official-rank>
        <global-rank></global-rank>
        <user-rank></user-rank>
      </div>
    </scroll>
  </div>
</template>

<script>
  import OfficialRank from './OfficialRank/OfficialRank'
  import GlobalRank from './GlobalRank/GlobalRank'
  import UserRank from './UserRank/UserRank'
  import Scroll from 'base/Scroll/Scroll'
  export default {
    name: "rank",
    components: {
      OfficialRank, Scroll, GlobalRank, UserRank
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "Rank.styl"
</style>
