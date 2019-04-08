<template>
  <div class="home">
    <div class="wrapper" :class="{ blur: settings }">
      <div>
        <h1>VUE POKER</h1>
        <custom-button
          bgColor="#e12943"
          txtColor="#fff"
          :onClick="toggleSettings">Play</custom-button>
      </div>
    </div>
    <game-settings v-if="settings"></game-settings>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
import CustomButton from '@/components/CustomButton'
import GameSettings from '@/components/GameSettings'

export default {
  name: 'home',
  components: {
    CustomButton,
    GameSettings
  },
  computed: {
    ...mapState([
      'settings'
    ])
  },
  methods: {
    ...mapActions([
      'toggleSettings'
    ])
  }
}
</script>

<style scoped>
div.home,
div.wrapper {
  flex: 1;
  min-height: 100%;
  display: flex;
  flex-flow: column nowrap;
}

div.wrapper.blur {
  filter: blur(2px);
}

div.home h1 {
  font-size: 4em;
}
</style>
