import axios from 'axios'

export default {
  GetPersonalFM() {
    return axios.get('/personal_fm')
  },
  GetSong(id) {
    return axios.get(`/music/url?id=${id}`)
  },
  GetSimiSong(id) {
    return axios.get('/simi/song', {
      params: {
        id: id
      }
    })
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
  GetMvComments(id, offset=0, limit=100) {
    return axios.get('/comment/mv', {
      params: {
        id: id,
        offset: offset,
        limit: limit
      }
    })
  },
  GetSimiMv(id) {
    return axios.get('/simi/mv', {
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
  GetSinger(id=6452) {
    return axios.get('/artists', {
      params: {
        id: id
      }
    })
  },
  GetSingerMV(id=6452) {
    return axios.get('/artist/mv', {
      params: {
        id: id
      }
    })
  },
  GetSingerAlbums(id, offset=0, limit=50) {
    return axios.get('/artist/album', {
      params: {
        id: id,
        offset: offset,
        limit: limit
      }
    })
  },
  GetSinerDesc(id) {
    return axios.get('/artist/desc', {
      params: {
        id: id
      }
    })
  },
  GetSimiSinger(id) {
    return axios.get('/simi/artist', {
      params: {
        id: id
      }
    })
  },
  GetSongListDetail(id) {
    return axios.get(`/playlist/detail?id=${id}`)
  },
  GetDailyRecommend() {
    return axios.get('/recommend/songs')
  },
  GetSongLyric(id) {
    return axios.get(`/lyric?id=${id}`)
  }
}
