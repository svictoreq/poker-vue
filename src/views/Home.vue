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
import CustomButton from '@/components/CustomButton'

export default {
  name: 'home',
  components: {
    CustomButton
  },
  computed: {

  },
  methods: {

  }
}
</script>
