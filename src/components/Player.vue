<template>
  <div class="player" :class="`player-${turn}`">
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
    cards: Array,
    money: Number,
    turn: Number,
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
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

div.cards {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-template-rows: 1fr;
  grid-column-gap: 8px;
}
</style>
