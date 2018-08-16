<template>
    <div class="wrapper">
        <md-button class="md-primary md-dense md-raised" v-on:click="onAdd">
            add
        </md-button>
        <Form v-if="showForm" :action="action" :task="formItem" @onSubmit="onSubmit"/>
        <ul>
            <ListItem v-for="(value, index) in tasks" v-bind:key="index" :task="value" @onEdit="onEdit"/>
        </ul>
    </div>
</template>

<script>
  import ListItem from './ListItem';
  import Form from './Form';

  export default {
    name: 'List',
    components: {
      ListItem,
      Form,
    },
    data: function() {
      return {
        showForm: false,
        action: '',
        formItem: null,
      }
    },
    computed: {
      tasks() {
        return this.$store.state.tasks
      }
    },
    methods: {
      onAdd() {
        this.formItem = {};
        this.action = 'create';
        this.showForm = true;
        // this.$store.commit('add', {title: Math.random().toString(36).substring(7)})
      },
      onEdit(item) {
        this.formItem = item;
        this.action = 'edit';
        this.showForm = true;
      },
      onSubmit(item) {
        if(item.id === undefined) {
          this.$store.commit('add', item)
        } else {
          this.$store.commit('edit', item)
        }
        this.formItem = null;
        this.action = '';
        this.showForm = false;
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
