<template>
  <div>
    这是基类组件
    <button @click="onclick">返回首页</button>
  </div>
</template>

<script>
const componentA = {
  created () {
    console.log('我是componentA')
  }
}
export default {
  extends: componentA,
  data () {
    return {
      a: ''
    }
  },
  created () {
    console.log('我是基类组件')
    console.log(this.a)
  },
  methods: {
    onclick () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
