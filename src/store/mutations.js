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
  }
}

export default mutations
