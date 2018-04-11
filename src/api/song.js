import axios from 'axios'

export default {
  GetPersonalFM() {
    return axios.get('/personal_fm')
  }
}
