<template>
  <div>
    <router-link to="/filter">去filter页面</router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  // 组件级钩子函数
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('beforeRouteUpdate')
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('beforeRouteLeave')
    next()
  }
  /*
    默认页面渲染的钩子函数执行顺序
    1、调用离开路由的组件守卫  beforeRouteLeave
    2、全局前置守卫  beforeEach
    3、重用的组件调用 beforeRouteUpdate
    4、调用路由独享守卫 beforeEnter
    5、在将要进入的路由组件中调用beforeRouteEnter
    6、调用全局解析守卫 beforeResolve
   */

}
</script>
