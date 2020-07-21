import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/computedAndWatch',
    component: () => import('../views/computedAndWatch.vue')
  }
]

const router = new VueRouter({
  routes
})
export default router
