import axios from 'axios'

export default {
  //Account
  LoginByPhone(phone, password) {
    return axios.get(`/login/cellphone?phone=${phone}&password=${password}`)
  },
  LoginRefresh() {
    return axios.get('/login/refresh')
  },
  GetAccountDetail(uid) {
    return axios.get('/user/detail', {
      params: {
        uid: uid
      }
    })
  },
  DailySignMeIn() {
    return axios.get('/daily_signin')
  },
  GetFansData(uid) {
    return axios.get('/user/followeds', {
      params: {
        uid: uid
      }
    })
  }
}
