import * as types from './mutation-types'
import api from '../api/login'

export const enterFM = function ({ commit, state }) {
  commit(types.SET_FM, true)
  commit(types.SET_PLAYER, false)
  commit(types.SET_CURRENT_PLAYER, false)
}

export const enterPlayer = function ({ commit, state }) {
  commit(types.SET_PLAYER, true)
  commit(types.SET_FM, false)
  commit(types.SET_CURRENT_PLAYER, true)
}

export const selectPlayer = function ({ commit, state }) {
  state.currentPlayer ? commit(types.SET_PLAYER, true) : commit(types.SET_FM, true)
}

export const setCurrentUser = function ({ commit, state }, { status, uid, account, password }) {
  let userInfo = {
    timeStamp: Date.now(),
    uid: uid,
    account: account,
    password: password
  }
  commit(types.SET_CURRENT_USER_STATUS, status)
  commit(types.SET_CURRENT_USER_ID, uid)
  localStorage.setItem('simplemusicUserInfo', JSON.stringify(userInfo))
}

export const updateLoginStatus = function ({ commit, state }) {
  return api.LoginRefresh()
    .then((res) => {
      let currentUser= JSON.parse(localStorage.getItem('simplemusicUserInfo')),
        uid = currentUser.uid
      commit(types.SET_CURRENT_USER_STATUS, true)
      commit(types.SET_CURRENT_USER_ID, uid)
      return Promise.resolve(true)
    })
    .catch((error) => {
      let currentUser= JSON.parse(localStorage.getItem('simplemusicUserInfo')),
        maxAge = state.maxAge,
        isExpired = (Date.now() - currentUser.timeStamp) > maxAge? true:false

      if ( !isExpired ) {
        return api.LoginByPhone(currentUser.account, currentUser.password)
          .then((res) => {
            setCurrentUser({
              status: true,
              uid: res.data.account.id,
              account: currentUser.account,
              password: currentUser.password
            })
            return Promise.resolve(true)
          })
          .catch((error) => {
            return Promise.reject(false)
          })
      }
      else {
        localStorage.removeItem('simplemusicUserInfo')
        return Promise.reject(false)
      }
    })
}
