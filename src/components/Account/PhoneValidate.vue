<template>
  <div class="phone-validate">
    <div class="nav-panel-wrapper">
      <div class="nav-panel">
        <span class="nav-header action-add">
          <i class="material-icons md-56 md-light">keyboard_arrow_left</i>
        </span>
        <div class="nav-body panel">
          <p>手机号验证</p>
        </div>
        <div class="nav-tail blank"></div>
      </div>
    </div>
    <section class="phone-validate-forms">
      <p class="validate-info">为了安全，我们会向你的手机发送短信验证码</p>
      <div class="input phone">
        <i class="material-icons md-56">vpn_key</i>
        <input type="text" placeholder="输入验证码">
      </div>
      <span class="button login-action-next">下一步</span>
    </section>
  </div>
</template>

<script>
    export default {
        name: "phoneValidate"
    }
</script>

<style type="text/stylus" rel="stylesheet/stylus" lang="stylus" scoped>
  @import "./PhoneValidate.styl"
</style>
