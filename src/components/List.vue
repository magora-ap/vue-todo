<template>
    <div class="wrapper">
        <md-button class="md-primary md-dense md-raised" v-on:click="onAdd">
            add
        </md-button>
        <ul>
            <ListItem v-for="(value, index) in values" v-bind:key="index" :data="value"/>
        </ul>
    </div>
</template>

<script>
  import ListItem from './ListItem';

  export default {
    name: 'List',
    props: {
      'values': Array,
    },
    components: {
      ListItem,
    },
    methods: {
      onAdd() {
        this.$store.commit('add', {title: Math.random().toString(36).substring(7)})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrapper {
        padding: 20px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
</style>
