<template>
    <div class="logined-account-card">
      <div class="row">
        <div class="account-brief">
          <div class="account-avatar"><img v-lazy="accountAvatarUrl" alt="account-avatar"></div>
          <div>
            <h1 class="account-name">{{ accountName }}</h1>
            <span class="account-level"><i>Lv </i>{{ accountLevel }}</span>
          </div>
        </div>
        <div class="account-action-daily">
          <main-button
            @getClickStatus="_signMeIn"
            :toggle="false"
            :button-name-list="['签到', '已签到']"
            button-size="medium"
            :button-status="false">
          </main-button>
          <transition name="toast-popup">
            <div class="toast-wrapper" v-show="isToast">
              <toast
                :content="errorMsg">
              </toast>
            </div>
          </transition>
        </div>
      </div>
      <div class="row">
        <ul class="account-detail">
          <li>
            <p>动态</p>
            <span>{{ accountTweetsNum }}</span>
          </li>
          <li @click="_link('/account/followers')">
            <p>关注</p>
            <span>{{ accountFollowers }}</span>
          </li>
          <li @click="_link('/account/fans')">
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
  import Toast from '../base/Toast/Toast'
  import { mapGetters } from 'vuex'
  import api from '../../api/login'

  export default {
    components: {MainButton, Toast},
    name: "logined-account-card",
    data() {
      return {
        accountAvatarUrl: require('../../assets/img/default_avatar.png'),
        accountName: '网易云音乐用户',
        accountLevel: '9',
        accountFans: '0',
        accountFollowers: '0',
        accountTweetsNum: '0',
        errorMsg: '积分+3',
        isToast: false
      }
    },
    watch: {
      isToast(val, oldVal) {
        if (val) {
          setTimeout(() => {
            this.isToast = false
          }, 1000)
        }
      },
    },
    computed: {
      ...mapGetters(['uId'])
    },
    methods: {
      _formatAccountInfo(profile) {
        this.accountAvatarUrl = profile.avatarUrl
        this.accountTweetsNum = profile.eventCount
        this.accountFans = profile.followeds
        this.accountFollowers = profile.follows
        this.accountName = profile.nickname
      },
      _signMeIn() {
        api.DailySignMeIn()
          .then((res) => {
            if (res.data.code === 200) {
              this.errorMsg = `积分+${res.data.point}`
              this.isToast = true
            }
            else if(res.data.code === -2) {
              this.errorMsg = res.data.msg
              this.isToast = true
            }
          })
      },
      _link(url) {
        this.$router.push({path: url, query: {transition: 'slide-right'}})
      }
    },
    created() {
      api.GetUserDetail(this.uId)
          .then((res) => {
            this._formatAccountInfo(res.data.profile)
          })
        .catch((error) => {
          console.log(error)
        })
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  @import './LoginedAccountCard.styl'
</style>
