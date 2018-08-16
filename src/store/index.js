import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    increment: 1,
    tasks: []
  },
  mutations: {
    add(state, payload) {
      let task = {...payload};
      task.id = state.increment++;
      state.tasks.push(task);
    },
    edit(state, payload) {
      let idx = state.tasks.findIndex((el) => el.id === payload.id);
      state.tasks.splice(idx, 1, payload);
    },
    delete(state, payload) {
      state.tasks.splice(state.tasks.indexOf(payload), 1);
    }
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})