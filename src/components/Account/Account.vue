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
          <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
        </section>
        <section class="collections">
          <collect-item header-icon-name="local_florist" item-name="VIP会员" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
          <collect-item header-icon-name="shopping_cart" item-name="商城" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
          <collect-item header-icon-name="inbox" item-name="在线听歌免流量" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
        </section>
        <section class="collections">
          <collect-item header-icon-name="settings" item-name="设置" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
          <collect-item header-icon-name="fullscreen" item-name="扫一扫" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
          <collect-item header-icon-name="card_giftcard" item-name="个性换肤" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
          <collect-item header-icon-name="brightness_3" item-name="夜间模式" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
          <collect-item header-icon-name="alarm" item-name="音乐闹钟" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
          <collect-item header-icon-name="access_time" item-name="定时关闭" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
          <collect-item header-icon-name="directions_car" item-name="驾驶模式" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
          <collect-item header-icon-name="card_membership" item-name="优惠券" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
        </section>
        <section class="collections">
          <collect-item header-icon-name="share" item-name="分享网易云音乐" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
          <collect-item header-icon-name="info" item-name="关于" tail-icon-name="keyboard_arrow_right" item-type="icon"></collect-item>
        </section>
        <section class="collections account-action-login">
          <main-button
            @getClickStatus="_loginOrOut"
            secondary-color="white"
            :toggle="true"
            :button-name-list="['登录', '退出登录']"
            button-size="large"
            :button-status="isLogin">
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
    import { mapGetters } from 'vuex'

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
      computed: {
        ...mapGetters(['isLogin'])
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
