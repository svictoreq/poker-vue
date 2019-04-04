<template>
  <button :style="styles" @click="clickMethod">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'custom-button',
  props: {
    bgColor: String,
    txtColor: String,
    onClick: Function
  },
  computed: {
    styles () {
      return {
        backgroundColor: this.bgColor,
        color: this.txtColor
      }
    },
    clickMethod () {
      if (this.onClick) return this.onClick
      return function () {}
    }
  }
}
</script>

<style scoped>
button {
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-family: 'Roboto';
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;
}
</style>
