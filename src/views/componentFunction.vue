<template>
  <div>
    <h3>父组件</h3>
    <button @click="updateData">改变数据</button>
    <p>{{test}}</p>
    <child></child>
  </div>
</template>
<script>
import Child from '../components/child'
export default {
  data () {
    return {
      test: 10
    }
  },
  components: {
    Child
  },
  methods: {
    updateData () {
      this.test = 30
    }
  },
  beforeCreate () {
    console.log('parent beforeCreate')
  },
  created () {
    console.log('parent created')
  },
  beforeMount () {
    console.log('parent beforeMount')
  },
  mounted () {
    console.log('parent mounted')
  },
  beforeUpdate () {
    console.log('parent beforeUpdate')
  },
  updated () {
  // 修改之后调用
  // beforeUpdate 、updated 可以监控data里的所有数据变化
  // 不要在update beforeUpdate修改不定数据，否则会引起死循环
  // 监听data里的所有的数据，非updated莫属
    console.log('parent update')
  },
  beforeDestroy () {
    console.log('parent beforeDestroy')
  },
  destroyed () {
    console.log('parent destroyed')
  }
  /**
   * 父子组件钩子函数的执行顺序
   * 父组件beforeCreate
   * 父组件created
   * 父组件beforeMount
   * 子组件beforeCreate
   * 子组件created
   * 子组件beforeMount
   * 子组件mounted
   * 父组件mounted
   */
}
</script>
