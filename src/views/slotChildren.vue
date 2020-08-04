<template>
  <div>
    <h1>我是子组件</h1>
    <!-- 1 匿名插槽 -->
    <!-- <slot></slot> -->
    <!-- 2、具名插槽 -->
    <!-- <h3>{{test}}</h3>
    <slot></slot>
    <slot name="header"></slot>
    <slot name="footer"></slot> -->
    <!-- 作用域插槽 -->
    <slot name="todo" :user="user" :test="test" :arr='arr'>
        {{ user.lastName }}
    </slot>
  </div>
</template>
<script>
export default {
  data () {
    return {
      test1: '我是子组件test',
      user: {
        lastName: 'Zhang',
        firstName: 'yue'
      },
      test: [1, 2, 3, 4],
      arr: ['w', 'e']
    }
  }
}
</script>
