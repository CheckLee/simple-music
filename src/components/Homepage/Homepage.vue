<template>
  <div class="homepage">
    <section class="homepage-bg">
      <div class="nav-panel-wrapper">
        <div class="nav-panel">
          <span class="nav-header action-backward" @click="_backward">
            <i class="material-icons md-56 md-light">keyboard_arrow_left</i>
          </span>
          <div class="nav-body panel"></div>
          <div class="nav-tail blank"></div>
        </div>
      </div>
      <div class="homepage-accountInfo">
        <div class="account-avatar"><img src="#" alt="account-avatar"></div>
        <div class="account-brief">
          <div class="row account-brief">
            <h1 class="account-name">姜维</h1>
            <span class="account-level"><i>Lv </i>9</span>
          </div>
          <ul class="row account-detail">
            <li>
              <p>关注</p>
              <span>3</span>
            </li>
            <li>
              <p>粉丝</p>
              <span>1</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg">
        <img src="#" alt="background">
      </div>    
    </section>
    <section class="homepage-routerlink">
      <router-link class="tab-item" tag="div" to="/foundmusic/recommend">
        <span class="tab-link">音乐</span>
        <span>21</span>
      </router-link>
      <router-link class="tab-item" tag="div" to="/foundmusic/songlist">
        <span class="tab-link">动态</span>
        <span>11</span>
      </router-link>
      <router-link class="tab-item" tag="div" to="/foundmusic/songlist">
        <span class="tab-link">关于TA</span>
      </router-link>
    </section>
    <section class="homepage-cards">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </section>
  </div>  
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
