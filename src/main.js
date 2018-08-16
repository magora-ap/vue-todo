import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import store from './store'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(Vuelidate)
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render(h) {
    return h(App);
  },
  store,
  router,
}).$mount('#app')
