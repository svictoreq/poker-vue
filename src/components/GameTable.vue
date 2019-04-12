<template>
  <div class="table">
    <div class="game-wrapper">
      <div class="table-grid">
        <div class="center">
          <div class="community-cards">
            card
          </div>
          <div class="pot">
            coins
          </div>
        </div>
        <player v-for="(player) in gameData.players"
          :key="player.id"
          :id="player.id"
          :name="player.name"
          :cards="player.cards"
          :money="player.money"
          :turn="player.turn"
          :isUser="player.id === gameData.playerId" />
      </div>
    </div>
    <div class="button-wrapper">
      <button @click="dealPlayerCards">Deal</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getRandomCard } from '@/utils/helpers'
import Player from '@/components/Player'

export default {
  name: 'game-table',
  components: {
    Player
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'gameData'
    ])
  },
  methods: {
    ...mapActions([
      'removeCard',
      'assignPlayerCard'
    ]),
    dealPlayerCards () {
      for (let i = 0; i < 2; i++) {
        for (let pIdx = 0; pIdx < this.gameData.playerCount; pIdx++) {
          const player = this.gameData.players[pIdx]
          const card = getRandomCard(this.gameData.deck)
          this.assignPlayerCard({ playerId: player.id, card })
          this.removeCard(card)
        }
      }
    }
  }
}
</script>

<style scoped>
div.table {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 100%;
  background-color: #e6e6e6;
}

div.game-wrapper {
  height: 80vh;
  display: flex;
}

div.table-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
    ". player-4 player-5 ."
    "player-3 center center player-6"
    ". player-2 player-1 .";
}

div.center {
  grid-area: center;
  display: flex;
  flex-flow: column nowrap;
}

div.button-wrapper {
  height: 10vh;
  width: 100%;
}
</style>
