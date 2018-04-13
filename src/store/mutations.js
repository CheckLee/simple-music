import * as types from './mutation-types'

const mutations = {
  [types.SET_RECOMMEND_ORDER_LIST](state, list) {
    state.recommendOrderList = list
  },
  [types.SET_JUSTIFY_ORDER](state) {
    state.isJustifyOrder = !state.isJustifyOrder
  },
  [types.SET_SORT_ORDER](state) {
    state.recommendOrderList.sort((a, b) => {
      return a.order - b.order
    })
  },
  [types.SET_CURRENT_USER_ID](state, uid) {
    state.currentUser.uid = uid
  },
  [types.SET_PLAYER](state, type) {
    state.isPlayer = type
  },
  [types.SET_FM](state, type) {
    state.isFM = type
  },
  [types.SET_CURRENT_PLAYER](state, type) {
    state.currentPlayer = type
  },
  [types.SET_FM_PLAYLIST](state, list) {
    state.FMPlayList = list
  },
  [types.SET_IS_PLAYING](state, type) {
    state.isPlaying = type
  }
}

export default mutations
