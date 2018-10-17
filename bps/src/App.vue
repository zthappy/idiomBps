<template>
  <div id="app">
    <div class="leftmenu">
      <ul>
        <li v-for="item in tablist" v-bind:key="item" @click="toggle(item.path)">{{item.name}}</li>
      </ul>
    </div>
    <div class="rightshow">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      tablist: [{
        name: 'a',
        path: '/a'
      }, {
        name: 'b',
        path: '/b'
      }]
    }
  },
  methods: {
    toggle (path) {
      this.$router.push({
        path: path
      })
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
