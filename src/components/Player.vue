<template>
  <div class="player" :class="`player-${number}`">
    <div class="dealing-wrapper" v-if="dealing">
      <div class="dealing-button">D</div>
    </div>
    <div class="cards">
      <card v-for="card in cards"
        :key="`${card.value}_of_${card.suit}`"
        :value="card.value"
        :suit="card.suit"
        :upwards="isUser" />
    </div>
    <div class="money">{{ `$${money}` }}</div>
    <div class="name">{{ name }}</div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'player',
  components: {
    Card
  },
  props: {
    id: String,
    name: String,
    number: Number,
    cards: Array,
    money: Number,
    turn: Number,
    dealing: Boolean,
    isUser: Boolean
  }
}
</script>

<style scoped>
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

div.player {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

div.cards {
  flex: 1;
  height: 160px;
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-template-rows: 1fr;
  grid-column-gap: 8px;
  margin-bottom: 8px;
}

div.dealing-wrapper {
  width: 100%;
  height: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: absolute;
  top: -38px;
}

div.dealing-button {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: whitesmoke;
  color: #121212;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  box-shadow: 0 0 4px 1px rgba(12, 12, 12, 0.2);
}
</style>
