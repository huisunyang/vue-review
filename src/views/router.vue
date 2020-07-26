<template>
  <div>
    <h3>vue-router</h3>
  </div>
</template>
<script>
export default {
  created () {
    // route为当前router跳转对象里面可以获取name、path、query、params等
    // router为VueRouter实例，想要导航到不同URL，则使用router.push方法
    console.log('路由实例', this.$router)
    // 动态路由参数通过路由对象获取
    console.log('动态路由参数', this.$route.params.id)
    console.log('路由对象', this.$route)

    // 编程式导航
    // 如果提供了 path，params 会被忽略
    /**
     * 使用params传参只能用name来引入路由，即push里面只能是name:’xxxx’,不能是path:’/xxx’,
     * 因为params只能用name来引入路由，如果这里写成了path，接收参数页面会是undefined！！！
     *
     * 二者还有点区别，直白的来说query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示
    */
    // this.$router.push({ path: '/filter', query: { name: 'test' } })
    // this.$router.push({ name: 'filter', query: { name: 'test' } })
    this.$router.push({ name: 'filter', params: { id: 'test' } })
  }
  /**
   * 路由入口: router-link
   * 路由匹配规则: {
      path: '/router',
      component: () => import('../views/router.vue')
      }
    路由出口: router-view
   */
}
</script>
