<template>
  <div class="mv-homepage">
    <div class="mv-homepage-header nav-panel-wrapper">
      <div class="nav-panel">
        <span class="nav-header action-backward">
          <i class="material-icons md-56 md-light">keyboard_arrow_left</i>
        </span>
        <div class="nav-body panel">
        </div>
        <div class="nav-tail blank"></div>
      </div>
    </div>
    <section class="mv-wrapper">
    </section>
    <div class="panel commits-panel"></div>
    <scroll
      class="mv-content">
      <div class="mv-panel">
        <p class="mv-title"></p>
        <p class="mv-creator"></p>
        <div class="mv-info">
          <p class="mv-publishtime"></p>
          <p class="mv-playcount"></p>
        </div>
      </div>
      <ul class="mv-actions">
        <li class="mv-like"></li>
        <li class="mv-collect"></li>
        <li class="mv-commit"></li>
        <li class="mv-share"></li>
      </ul>
      <div class="mv-suggestions">
        <div class="panel">
          <p>相关推荐</p>
        </div>
      </div>
      <div class="music-suggestions">
        <div class="panel">
          <p>相关音乐</p>
        </div>
      </div>
      <div class="commits-content"></div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../base/Scroll"
  import song from "../../api/song"

  export default {
    name: "MVHomepage",
    components: {
      Scroll
    },
    data() {
      return {
        name: 'MVHomepage'
      }
    }
  }
</script>

<style scoped>

</style>
