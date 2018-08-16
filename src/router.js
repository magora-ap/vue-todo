import VueRouter from 'vue-router';
import List from './components/List'
import NotFound from './components/NotFound';
const routes = [
  {
    path: '/',
    component: List,
  },
  {
    path: '*',
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;