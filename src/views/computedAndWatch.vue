<template>
  <div>
    <h2>computed 和watch的区别</h2>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 10,
      obj: {
        a: 1,
        b: 2
      }
    }
  },
  computed: {
    num2 () {
      // setTimeout(() => {
      //   console.log('test')
      // }, 1000)
      return this.num + 10
    }
  },
  watch: {
    num () {
      console.log('num发生改变')
    },
    // obj: {
    //   handler () {
    //     console.log('obj发生改变')
    //   },
    //   deep: true // 深度监听 对性能消耗比较厉害
    // },
    'obj.a' () {
      console.log('obj发生改变')
    }
  },
  created () {
    this.num = 30
    this.obj.a = 4
  }
  /*
    computed 和 watch的区别
    computed 为计算属性 根据data中的已知值生成一个新的值，新值只会根据已知值的变化而变化，不会受到其他数据变化的影响
    watch 监听数据的变化
    watch: 一个数据影响多个数据 是我影响别人
    computed:一个数据受多个数据影响 是别人影响我
   */
}
</script>
<style lang="">

</style>
