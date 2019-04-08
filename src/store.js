import Vue from 'vue'
import Vuex from 'vuex'
import { Player } from '@/utils/classes'
import {
  containsAllKeys,
  getRandomNames,
  generateDeck
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
    gameData: {
      playerCount: 6,
      players: [],
      initialMoney: 1000,
      deck: [],
      hands: []
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
      state.settings = false
      state.gameData.deck = generateDeck()
      state.gameData.playerCount = data.playerCount
      state.gameData.initialMoney = data.initialMoney
      state.gameData.players = []
      const names = [data.playerName]
      names.push(...getRandomNames(data.playerCount - 1))
      for (let i = 0; i < state.gameData.playerCount; i++) {
        const id = Date.now().toString() + (i + 1)
        state.gameData.players.push(new Player(id, names[i], i + 1, state.gameData.initialMoney))
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
