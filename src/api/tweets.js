import axios from 'axios'

export default {
  GetEvent() {
    return axios.get('/event')
  },
  GetTweets(uid) {
    return axios.get('/user/event', {
      params: {
        uid: uid,
      }
    })
  },
  GetUserDetail(uid) {
    return axios.get('/user/detail', {
      params: {
        uid: uid
      }
    })
  },
}
