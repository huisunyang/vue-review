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
  },
  {
    path: '/filter',
    component: () => import('../views/filter.vue')
  },
  {
    path: '/routerFunction',
    component: () => import('../views/routerFunction.vue'),
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter')
      next()
    }
  }
]

const router = new VueRouter({
  routes
})
// 全局钩子函数
// 全局前置守卫 通常用于处理登录拦截
router.beforeEach((to, from, next) => {
  console.log('router.beforeEach')
  next() // 正常跳转，不写将不跳转
})
// 全局解析守卫
router.beforeResolve((to, from, next) => {
  console.log('router.beforeResolve')
  next()
})
// 全局后置钩子
router.afterEach((to, from) => {
  console.log('router.afterEach')
})

export default router
