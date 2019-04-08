<template>
  <div class="table">
    <div class="players-wrapper">
      <div class="players-grid">
        <div v-for="(player, i) in gameData.players" :key="player.id" :class="`player-${i+1}`">
          {{ player.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'game-table',
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

div.players-wrapper {
  height: 80vh;
  display: flex;
}

div.players-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
    ". player-4 player-5 ."
    "player-3 table table player-6"
    ". player-2 player-1 .";
}

div.player-1 {
  grid-area: player-1;
}

div.player-2 {
  grid-area: player-2;
}

div.player-3 {
  grid-area: player-3;
}

div.player-4 {
  grid-area: player-4;
}

div.player-5 {
  grid-area: player-5;
}

div.player-6 {
  grid-area: player-6;
}
</style>
