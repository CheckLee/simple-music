import axios from 'axios'

export default {
  Login(phone, password) {
    return axios.get(`/login/cellphone?phone=${phone}&password=${password}`)
  }
}
