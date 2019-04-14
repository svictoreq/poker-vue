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
  CREATE_GAME,
  REMOVE_CARD,
  ASSIGN_PLAYER_CARD
} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings: false,
    gameData: {
      playerId: '',
      playerCount: 6,
      players: [],
      initialMoney: 1000,
      deck: [],
      turn: 1,
      bettingRound: 1,
      dealer: '',
      smallBlind: 0,
      bigBlind: 0,
      pot: 0
    }
  },
  getters: {
    user (state) {
      return state.gameData.players
        .find((player) => player.id === state.gameData.playerId)
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
        const turn = i === 0 ? 6 : i
        if (names[i] === data.playerName) {
          state.gameData.playerId = id
          state.gameData.dealer = id
        }
        state.gameData.players.push(new Player(id, names[i], i + 1, turn, state.gameData.initialMoney))
        console.info()
      }
    },
    [REMOVE_CARD] (state, card) {
      const cardIndex = state.gameData.deck.indexOf(card)
      state.gameData.deck.splice(cardIndex, 1)
    },
    [ASSIGN_PLAYER_CARD] (state, { playerId, card }) {
      const playerIndex = state.gameData.players
        .findIndex((player) => player.id === playerId)
      state.gameData.players[playerIndex].addCard(card)
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
    },
    removeCard ({ commit }, card) {
      commit(REMOVE_CARD, card)
    },
    assignPlayerCard ({ commit }, payload) {
      commit(ASSIGN_PLAYER_CARD, payload)
    }
  }
})
