<template>
  <div class="phone-loginin">
    <div class="nav-panel-wrapper">
      <div class="nav-panel">
        <span class="nav-header action-add">
          <i class="material-icons md-56 md-light">keyboard_arrow_left</i>
        </span>
        <div class="nav-body panel">
          <p>手机号登录</p>
        </div>
        <div class="nav-tail blank"></div>
      </div>
    </div>
    <section class="phone-login-forms">
      <div class="input phone">
        <i class="material-icons md-56">smartphone</i>
        <input type="text" placeholder="手机号">
      </div>
      <div class="input password">
        <i class="material-icons md-56">lock_outline</i>
        <input type="password" placeholder="请输入密码">
      </div>
      <span class="button login-action-login">登录</span>
      <span class="button login-action-reset">重设密码</span>
    </section>
  </div>
</template>

<script>
    export default {
      name: "phoneLoginIn"
    }
</script>

<style type="text/stylus" rel="stylesheet/stylus" lang="stylus" scoped>
  @import "./PhoneLoginIn.styl"
</style>
