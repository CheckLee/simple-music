import * as types from './mutation-types'

export const enterFM = function ({ commit, state }) {
  commit(types.SET_FM, true)
  commit(types.SET_CURRENT_PLAYER, false)
}

export const enterPlayer = function ({ commit, state }) {
  commit(types.SET_PLAYER, true)
  commit(types.SET_CURRENT_PLAYER, true)
}

export const selectPlayer = function ({ commit, state }) {
  state.currentPlayer ? commit(types.SET_PLAYER, true) : commit(types.SET_FM, true)
}
