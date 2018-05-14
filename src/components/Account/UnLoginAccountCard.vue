<template>
    <div class="unlogin-account-card">
      <p>欢迎使用</p>
      <p>网易云音乐大法好！</p>
      <main-button
        @getClickStatus="_loginOrOut"
        :toggle="false"
        :button-name-list="['登录', '退出登录']"
        button-size="large"
        :button-status="false">
      </main-button>
    </div>
</template>

<script>
  import MainButton from "../base/Button/MainButton";

  export default {
    components: {MainButton},
    name: "un-login-account-card",
    methods: {
      _loginOrOut(status) {
        console.log(status)
        if (status) {
          this.$router.push({path: '/loginin/phonelogin', query: {transition: 'pop-up'}})
        }
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import './UnLoginAccountCard.styl'
</style>
