<template>
    <div class="list-item">
        <div class="list-item__title">
            {{task.title}}
        </div>
        <div class="list-item__actions">
            <span v-on:click="onEdit">edit</span>
            <span v-on:click="onDelete">delete</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ListItem',
    props: {
      'task': Object,
    },
    methods: {
      onEdit() {
        this.$emit('onEdit', this.task);
      },
      onDelete() {
        this.$store.commit('delete', this.task);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list-item {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .list-item__title {
        flex: 1 1 auto;
    }
    .list-item__actions {
        flex: 0 0 50px;

    }
    .list-item__actions span {
        margin-right: 20px;
        cursor: pointer;
    }
</style>
