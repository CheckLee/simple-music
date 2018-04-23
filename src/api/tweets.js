import axios from 'axios'

export default {
  GetEvent() {
    return axios.get('/event')
  },
  GetTweets() {
    return axios.get('/user/event?uid=9861246')
  },
  GetUserDetail(uid) {
    return axios.get('/user/detail', {
      params: {
        uid: uid
      }
    })
  },
}