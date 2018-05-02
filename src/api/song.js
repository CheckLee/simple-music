import axios from 'axios'

export default {
  GetPersonalFM() {
    return axios.get('/personal_fm')
  },
  GetSong(id) {
    return axios.get(`/music/url?id=${id}`)
  },
  GetSongDetail(id) {
    return axios.get('/song/detail', {
      params: {
        ids: id
      }
    })
  },
  GetMv(id) {
    return axios.get('/mv', {
      params: {
        mvid: id
      }
    })
  },
  PlayMv(url) {
    return axios.get('/mv/url', {
      params: {
        url: url
      }
    })
  },
  GetSongListDetail(id) {
    return axios.get(`/playlist/detail?id=${id}`)
  }
}
