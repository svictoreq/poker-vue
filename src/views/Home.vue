<template>
  <div class="home">
    <h1>Vue Poker</h1>
    <router-link to="/play">
      <custom-button bgColor="#e12943" txtColor="#fff">Play</custom-button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/my-store'
import CustomButton from '@/components/CustomButton'

export default {
  name: 'home',
  components: {
    CustomButton
  },
  data () {
    return {
      sharedState: store.state
    }
  }
}
</script>
