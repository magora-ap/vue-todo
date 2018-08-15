<template>
    <div id="app">
        <List :values="values"/>
    </div>
</template>

<script>
  import List from './components/List'
  export default {
    name: 'app',
    components: {
      List,
    },
    computed: {
      values() {
        return this.$store.state.tasks
      }
    },
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
