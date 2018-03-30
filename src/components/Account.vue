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
          <li>
            <p>动态</p>
            <span>{{ accountTweetsNum }}</span>
          </li>
          <li>
            <p>关注</p>
            <span>{{ accountFollowers }}</span>
          </li>
          <li>
            <p>粉丝</p>
            <span>{{ accountFans }}</span>
          </li>
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
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 34px;
  }
  .account-brief {
    display: flex;
    align-items: center;
  }
  .account-avatar {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    margin: 0 20px 0 30px;
  }
  .account-avatar img {
    width: inherit;
    height: inherit;
    object-fit: fill;
  }
  .account-name, .account-level {
    height: 40px;
    line-height: 40px;
    display: block;
  }
  .account-name {
    font-size: 26px;
  }
  .account-level {
    font-size: 22px;
  }
  .account-action-daily {
    width: 140px;
    margin-right: 40px;
  }
  .account-detail {
    display: flex;
    width: 74%;
    text-align: center;
  }
  .account-detail li {
    flex-grow: 1;
  }
  .account-detail li > * {
    height: 40px;
    line-height: 40px;
  }
  .account-detail li p {
    font-size: 22px;
    color: #8e8d92;
  }
  .account-detail li span {
    font-size: 26px;
  }
</style>
