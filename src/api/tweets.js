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

  test(uids) {
    let events = []
    uids.forEach((id) => {
      GetTweets(id)
        .then((res) => {
          events.push(res.data.events)
        })
    })
  },
  GetUserDetail(uid) {
    return axios.get('/user/detail', {
      params: {
        uid: uid
      }
    })
  }
}
