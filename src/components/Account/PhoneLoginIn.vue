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
        <input
          v-validate="'required|digits:11'"
          v-model="account"
          name="phone"
          type="text"
          placeholder="手机号">
      </div>
      <div class="input password">
        <i class="material-icons md-56">lock_outline</i>
        <input
          v-validate="'required|alpha_num'"
          v-model="password"
          name="password"
          type="password"
          placeholder="请输入密码">
      </div>
      <span class="button login-action-login" @click="_submit">登录</span>
      <span class="button login-action-reset">重设密码</span>
      <toast
        :content="errorMsg">
      </toast>
    </section>
  </div>
</template>

<script>
  import api from '../../api/login'
  import Toast from '../base/Toast/Toast'

  export default {
    name: "phoneLoginIn",
    components: {
      Toast
    },
    data() {
      return {
        account: '',
        password: '',
        errorMsg: '',
        errorSelector: ['请输入正确的手机号', '请输入正确的密码']
      }
    },
    methods: {
      _submit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            // eslint-disable-next-line
            api.LoginByPhone(this.account, this.password).then(res => {
                if (res.data.code === 200) {
                  this.$store.dispatch('setCurrentUser',
                    {
                      status: true,
                      uid: res.data.account.id,
                      account: this.account,
                      password: this.password
                    })
                  this.$router.push({path: '/', query: {transition: 'pop-down'}})
                }
            })
            return;
          }
          this.errorMsg = this.errors.has('phone')? this.errorSelector[0]:this.errorSelector[1]
        });
      }
    }
  }
</script>

<style type="text/stylus" rel="stylesheet/stylus" lang="stylus" scoped>
  @import "./PhoneLoginIn.styl"
</style>
