<template>
  <div>
    这是子组件
    <button @click="updateChildData">改变child数据</button>
    <p>{{testChild}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      testChild: 2
    }
  },
  methods: {
    updateChildData () {
      this.testChild = 5
    }
  },
  beforeCreate () {
    console.log('child beforeCreate')
  },
  created () {
    console.log('child created')
  },
  beforeMount () {
    console.log('child beforeMount')
  },
  mounted () {
    console.log('child mounted')
  },
  beforeUpdate () {
    console.log('child beforeUpdate')
  },
  updated () {
    console.log('child updated')
  },
  beforeDestroy () {
    console.log('child beforeDestroy')
  },
  destroyed () {
    console.log('child destroyed')
  }
}
</script>
