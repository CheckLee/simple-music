<template>
  <div id="ACCOUNT" class="account">
    <section class="account-info-card">
      <div class="row">
        <div class="account-brief">
          <div class="account-avatar"><img :src="accountAvatarUrl" alt="account-avatar"></div>
          <div>
            <h1 class="account-name">{{ accountName }}</h1>
            <span class="account-level">{{ accountLevel }}</span>
          </div>
        </div>
        <div class="account-action-daily">
          <main-button :toggle="false" :button-name-list="['签到', '已签到']"></main-button>
        </div>
      </div>
      <div class="row">
        <ul class="account-detail">
          <li>{{ accountTweetsNum }}</li>
          <li>{{ accountFollowers }}</li>
          <li>{{ accountFans }}</li>
        </ul>
        <div class="account-action-modify">
          <a href=""></a>
        </div>
      </div>
    </section>
    <collect-item header-icon-name="email" item-name="邮件" tail-icon-name="keyboard_arrow_right" item-class="text" :badge-num="5"></collect-item>
  </div>
</template>

<script>
    import CollectItem from "./base/CollectItem/CollectItem";
    import MainButton from "./base/Button/MainButton";

    export default {
      components: {
        MainButton,
        CollectItem},
      name: "Account",
      data() {
        return {
          accountAvatarUrl: require('../assets/img/default_avatar.png'),
          accountName: '姜维',
          accountLevel: '99',
          accountFans: '1000',
          accountFollowers: '1000',
          accountTweetsNum: '99'
        }
      }
    }
</script>

<style scoped>
  .account-info-card {
    display: flex;
    flex-direction: column;
  }
  .account-avatar {
    width: 120px;
    height: 120px;
    border-radius: 100%;
  }
  .account-avatar img {
    width: inherit;
    height: inherit;
    object-fit: fill;
  }
</style>
