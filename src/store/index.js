import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    add(state, payload) {
      state.tasks.push(payload);
    },
    delete(state, payload) {
      state.tasks.splice(state.tasks.indexOf(payload), 1);
    }
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})