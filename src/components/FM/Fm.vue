<template>
	<div class="fm">
    <header class="header">
      <div class="back" @click="back">
        <i class="material-icons">chevron_left</i>
      </div>
      <div class="classes">
        <div class="classes-item">
          <i class="material-icons">radio</i>
          <div class="text">私人FM</div>
        </div>
        <div class="classes-item">
          <i class="material-icons">directions_run</i>
          <div class="text">跑步FM</div>
        </div>
      </div>
      <div class="info">
        <i class="material-icons">more_horiz</i>
      </div>
    </header>
    <div class="content">
      <personal-fm></personal-fm>
    </div>
  </div>
</template>

<script>
  import PersonalFm from './PersonalFm/PersonalFm'
  import { mapMutations } from 'vuex'
  export default {
    name: "fm",
    methods: {
      ...mapMutations({
        setPlayerSwitch: 'SET_PLAYER_SWITCH',
        setFM: 'SET_FM'
      }),
      back() {
        this.setFM(false)
      }
    },
    components: {
      PersonalFm
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/stylus/variable.styl"
  @import "Fm.styl"
</style>
