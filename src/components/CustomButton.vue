<template>
  <button :style="styles" @click="clickHandler" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'custom-button',
  props: {
    bgColor: String,
    txtColor: String,
    onClick: Function,
    disabled: Boolean
  },
  computed: {
    styles () {
      return {
        backgroundColor: this.bgColor,
        color: this.txtColor
      }
    },
    clickHandler () {
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
  outline: none;
}

button:active {
  opacity: 0.8;
}
</style>
