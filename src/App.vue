<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html {
  min-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}

body {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}
</style>
