import Vue from 'vue'
import Vuex from 'vuex'
import {
  containsAllKeys
} from '@/utils/helpers'
import {
  SET_STATE
} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
    [SET_STATE] (state, payload) {
      const stateKeys = Object.keys(state)
      const payloadKeys = Object.keys(payload)
      if (!containsAllKeys(stateKeys, payloadKeys)) return
      Object.assign(state, payload)
    }
  },
  actions: {
    setState ({ commit }, payload) {
      commit(SET_STATE, payload)
    }
  }
})
