import Vue from 'vue'
import Vuex from 'vuex'
import { Player } from '@/utils/classes'
import {
  containsAllKeys
} from '@/utils/helpers'
import {
  SET_STATE,
  TOGGLE_SETTINGS,
  CREATE_GAME
} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings: false,
    gameOptions: {
      playerCount: 6,
      players: [],
      initialMoney: 1000
    }
  },
  mutations: {
    [SET_STATE] (state, data) {
      const stateKeys = Object.keys(state)
      const dataKeys = Object.keys(data)
      if (!containsAllKeys(stateKeys, dataKeys)) return
      Object.assign(state, data)
    },
    [TOGGLE_SETTINGS] (state) {
      state.settings = !state.settings
    },
    [CREATE_GAME] (state, data) {
      state.gameOptions.playerCount = data.playerCount
      state.gameOptions.initialMoney = data.initialMoney
      state.gameOptions.players = []
      for (let i = 0; i < state.gameOptions.playerCount; i++) {
        const id = Date.now().toString() + (i + 1)
        state.gameOptions.players.push(new Player(id, i + 1, state.gameOptions.initialMoney))
        console.info()
      }
    }
  },
  actions: {
    setState ({ commit }, data) {
      commit(SET_STATE, data)
    },
    toggleSettings ({ commit }) {
      commit(TOGGLE_SETTINGS)
    },
    createGame ({ commit }, data) {
      commit(CREATE_GAME, data)
    }
  }
})
