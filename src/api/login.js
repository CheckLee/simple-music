import axios from 'axios'

export default {
  //Account
  LoginByPhone(phone, password) {
    return axios.get(`/login/cellphone?phone=${phone}&password=${password}`)
  },
  LoginRefresh() {
    return axios.get('/login/refresh')
  },
  GetUserDetail(uid) {
    return axios.get('/user/detail', {
      params: {
        uid: uid
      }
    })
  },
  GetUserSubCount() {
    return axios.get('/user/subcount')
  },
  GetUserPlayList(uid) {
    return axios.get('/user/playlist', {
      params: {
        uid: uid,
        more: true
      }
    })
  },
  GetFansData(uid) {
    return axios.get('/user/followeds', {
      params: {
        uid: uid
      }
    })
  },
  DailySignMeIn() {
    return axios.get('/daily_signin')
  },
  GetFollowsData(uid) {
    return axios.get('/user/follows', {
      params: {
        uid: uid
      }
    })
  }
}
