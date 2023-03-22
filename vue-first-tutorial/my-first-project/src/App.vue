<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-bind:title="message">{{ message }}</h1>
    <button v-on:click="changeMessage">reverse message</button>
    <input type="text" v-model="message" placeholder="Current Message value">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: 'first message invoke'
    }
  },
  methods: {
    changeMessage: function () {
      this.message = this.message.split(' ').reverse().join(' ')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
