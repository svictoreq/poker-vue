<template>
  <div class="overlay">
    <div class="dialog">
      <div class="options-wrapper">
        <div class="select-wrapper">
          <label for="player-count">Players: </label>
          <select name="player-count" v-model="playerCount">
            <option :value="2">2</option>
            <option :value="3">3</option>
            <option :value="4">4</option>
            <option :value="5">5</option>
            <option :value="6">6</option>
          </select>
        </div>
        <div class="select-wrapper">
          <label for="initial-money">Initial money: </label>
          <select name="initial-money" class="money" v-model="initialMoney">
            <option :value="1000">1000</option>
            <option :value="3000">3000</option>
            <option :value="5000">5000</option>
            <option :value="10000">10000</option>
            <option :value="15000">15000</option>
          </select>
        </div>
      </div>
      <div class="input-wrapper">
        <label for="player-name">Name: </label>
        <input type="text" name="player-name" autocomplete="off" v-model="playerName">
      </div>
      <div class="buttons-wrapper">
        <custom-button
          :onClick="toggleSettings"
          bgColor="#00BCD4"
          txtColor="#2C3E50">Cancel</custom-button>
        <custom-button
          :onClick="play"
          bgColor="#e12943"
          txtColor="#FFFFFF">Play</custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CustomButton from '@/components/CustomButton'

export default {
  name: 'game-settings',
  components: {
    CustomButton
  },
  data () {
    return {
      playerCount: 6,
      initialMoney: 1000,
      playerName: ''
    }
  },
  computed: {
    gameData () {
      return {
        playerCount: this.playerCount,
        initialMoney: this.initialMoney,
        playerName: this.playerName
      }
    }
  },
  methods: {
    ...mapActions([
      'toggleSettings',
      'createGame'
    ]),
    play () {
      if (!this.playerName) {
        alert('You have to insert a name')
        return
      }
      this.createGame(this.gameData)
      this.$router.push('/play')
    }
  }
}
</script>

<style scoped>
div.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  filter: none;
}

div.dialog {
  background-color: #FFFFFF;
  display: flex;
  flex-flow: column nowrap;
  width: 490px;
  padding: 20px;
  border-radius: 8px;
}

div.options-wrapper {
  display: flex;
  justify-content: space-evenly;
  font-size: 1.4em;
}

div.options-wrapper select {
  border: none;
  border-radius: 3px;
  font-size: 0.8em;
  outline: none;
}

div.input-wrapper {
  margin: 32px 0 0;
  font-size: 1.4em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
}

div.input-wrapper input {
  width: 250px;
  font-size: 0.9em;
  font-family: 'Roboto';
  margin-left: 8px;
  border: none;
  border-bottom: 1px solid buttonface;
  outline: none;
}

div.input-wrapper input:focus {
  border-bottom: 1px solid #00BCD4;
}

div.buttons-wrapper {
  display: flex;
  justify-content: space-evenly;
  margin-top: 71px;
}
</style>
