<template>
  <div id="ACCOUNT" class="account">
    <div class="nav-panel-wrapper">
      <div class="nav-panel">
        <p>账号</p>
      </div>
    </div>
    <scroll class="account-content">
      <div>
        <section class="account-info-card">
          <router-view></router-view>
        </section>
        <section class="collections">
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="icon" :badge-num="5"></collect-item>
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="0"></collect-item>
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
        </section>
        <section class="collections">
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
        </section>
        <section class="collections">
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
        </section>
        <section class="collections">
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="text" :badge-num="5"></collect-item>
        </section>
        <section class="collections account-action-login">
          <main-button
            @getClickStatus="_loginOrOut"
            secondary-color="white"
            :toggle="true"
            :button-name-list="['登录', '退出登录']"
            button-size="large"
            :button-status="false">
          </main-button>
        </section>
        <div class="blank"></div>
      </div>
    </scroll>
  </div>
</template>

<script>
    import CollectItem from "../base/CollectItem/CollectItem";
    import MainButton from "../base/Button/MainButton";
    import Scroll from "../base/Scroll/Scroll";

    export default {
      components: {
        Scroll,
        MainButton,
        CollectItem},
      name: "Account",
      data() {
        return {
          path: '/account/unloginaccount'
        }
      },
      methods: {
        _loginOrOut(status) {
          if (status) {
            // this.$router.push({path: '/loginin/phonelogin', query: {transition: 'pop-up'}})
            this.$router.push({path: '/loginin', query: {transition: 'pop-up'}})
          }
          else {
            this.$router.push({path: '/account/unloginaccount'})
          }
        }
      }
    }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import './Account.styl'
</style>
