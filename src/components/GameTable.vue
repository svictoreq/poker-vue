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
          :number="player.pNumber"
          :cards="player.cards"
          :money="player.money"
          :turn="player.turn"
          :dealing="player.id === gameData.dealer"
          :isUser="player.id === gameData.playerId" />
      </div>
    </div>
    <div class="buttons-wrapper">
      <custom-button :disabled="disableButtons">Check</custom-button>
      <custom-button :disabled="disableButtons">Call</custom-button>
      <custom-button :disabled="disableButtons">Raise</custom-button>
      <custom-button :disabled="disableButtons">Fold</custom-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { getRandomCard } from '@/utils/helpers'
import Player from '@/components/Player'
import CustomButton from '@/components/CustomButton'

export default {
  name: 'game-table',
  components: {
    Player,
    CustomButton
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'gameData'
    ]),
    ...mapGetters([
      'user'
    ]),
    disableButtons () {
      return !(this.user.turn === this.gameData.turn)
    }
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
  },
  created () {

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

div.buttons-wrapper {
  width: 100%;
  padding-top: 16px;
}
</style>
