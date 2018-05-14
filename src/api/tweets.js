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
  GetFollowerTweets(uids, promiseFn) {
    let allEvents = [],
      it = uids[Symbol.iterator](),
      self = this

    return x(it.next())

    function x(item) {
      if(item.done) {
        return Promise.resolve(allEvents)
      }
      return self.GetTweets(item.value)
        .then((res) => {
          let tweets = res.data.events
          return promiseFn(allEvents, tweets)
            .then((data) => {
              allEvents = data
            })
            .then(() => {
              return x(it.next())
            })
            .catch(Promise.reject)
        })
    }
  },
  GetUserDetail(uid) {
    return axios.get('/user/detail', {
      params: {
        uid: uid
      }
    })
  }
}
