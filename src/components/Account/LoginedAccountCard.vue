<template>
    <div class="logined-account-card">
      <div class="row" @click="test">
        <div class="account-brief">
          <div class="account-avatar"><img :src="accountAvatarUrl" alt="account-avatar"></div>
          <div>
            <h1 class="account-name">{{ accountName }}</h1>
            <span class="account-level">{{ accountLevel }}</span>
          </div>
        </div>
        <div class="account-action-daily">
          <main-button :toggle="false" :button-name-list="['签到', '已签到']" button-size="medium" :button-status="false"></main-button>
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
          <a href="#">我的资料</a>
        </div>
      </div>
    </div>
</template>

<script>
  import MainButton from "../base/Button/MainButton";
  import { mapGetters } from 'vuex'
  import api from '../../api/login'

  export default {
    components: {MainButton},
    name: "logined-account-card",
    data() {
      return {
        accountAvatarUrl: require('../../assets/img/default_avatar.png'),
        accountName: '姜维',
        accountLevel: '99',
        accountFans: '1000',
        accountFollowers: '1000',
        accountTweetsNum: '99'
      }
    },
    computed: {
      ...mapGetters(['uId'])
    },
    methods: {
      test() {
        api.GetAccountDetail('9861246')
          .then((res) => {
            console.log(res)
          })
      }
    },
    created() {
      api.GetAccountDetail(this.uId)
          .then((res) => {
            console.log(res)
          })
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import './LoginedAccountCard.styl'
</style>
