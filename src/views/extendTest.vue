<template>
  <div>
    这是基类组件
    <button @click="onclick">返回首页</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: ''
    }
  },
  created () {
    console.log(this.a)
  },
  methods: {
    onclick () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
