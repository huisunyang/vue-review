import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    // 路由懒加载
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/computedAndWatch',
    component: () => import('../views/computedAndWatch.vue')
  },
  {
    path: '/filter/',
    name: 'filter',
    component: () => import('../views/filter.vue'),
    props: true
  },
  {
    path: '/routerFunction',
    component: () => import('../views/routerFunction.vue'),
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter')
      next()
    }
  },
  {
    path: '/componentFunction',
    component: () => import('../views/componentFunction.vue')
  },
  {
    // 动态路由参数 以:开头 ？表示可选
    path: '/router/:id?',
    component: () => import('../views/router.vue')
  },
  {
    path: '/apiTest',
    component: () => import('../views/apiTest.vue')
  },
  {
    path: '/slot',
    component: () => import('../views/slot.vue')
  }
]

const router = new VueRouter({
  routes,
  // 滚动行为
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
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
