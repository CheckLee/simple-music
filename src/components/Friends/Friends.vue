<template>
  <div class="friends">
    <div class="nav-panel-wrapper">
      <div class="nav-panel">
        <span class="nav-header action-add">
          <i class="material-icons md-56 md-light">person_add</i>
        </span>
        <div class="nav-body panel">
          <ul>
            <li>
              <router-link tag="div" to="/friends/tweets">
                <span>关注</span>
              </router-link>
            </li>
            <li>
              <router-link tag="div" to="/friends/pushtweets">
                <span>推荐</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="nav-tail blank"></div>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
    export default {
        name: "friends"
    }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./Friends.styl"
</style>
