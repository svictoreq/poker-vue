<template>
  <div class="card">
    <div class="upwards" :class="suit" v-if="upwards">
      <div class="header">
        <span class="value">{{ value }}</span>
        <span class="suit">{{ suitIcon }}</span>
      </div>
      <div class="center"></div>
      <div class="footer">
        <span class="value">{{ value }}</span>
        <span class="suit">{{ suitIcon }}</span>
      </div>
    </div>
    <div class="downwards" v-else></div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    suit: {
      validator (suit) {
        return ['spades', 'clubs', 'diamonds', 'hearts'].indexOf(suit) !== -1
      }
    },
    value: {
      validator (val) {
        return ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
          .indexOf(val) !== -1
      }
    },
    upwards: { type: Boolean, default: true }
  },
  computed: {
    suitIcon () {
      const suits = {
        spades: '\u2660',
        clubs: '\u2663',
        hearts: '\u2665',
        diamonds: '\u2666'
      }
      return suits[this.suit]
    }
  }
}
</script>

<style scoped>
div.card {
  background-color: ghostwhite;
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  width: 100px;
  height: 160px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
}

div.card div span {
  font-family: 'Operator SSm Medium';
}

div.card.spades,
div.card.clubs {
  color: #121212;
}

div.card.diamonds,
div.card.hearts {
  color: #f22d42;
}

div.downwards {
  flex: 1;
  margin: 8px;
  border-radius: 3px;
  background-color: #42b983;
}

div.upwards {
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
}

div.card div.upwards div.header,
div.card div.upwards div.footer {
  box-sizing: border-box;
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  height: 30px;
  width: 100%;
  padding: 16px 12px;
  justify-content: flex-end;
}

div.card div.upwards div.footer {
  transform: rotate(-180deg);
}

div.card div.upwards div.center {
  flex: 1;
}
</style>
