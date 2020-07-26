<template>
  <div>
    <h2>{{ beforeFilterNum | filterNum}}</h2>
    <h2>{{componentFilter | toFixed}}</h2>
  </div>
</template>
<script>
export default {
  data () {
    return {
      beforeFilterNum: 40,
      componentFilter: 23.4567644
    }
  },
  filters: {
    toFixed: value => {
      return value.toFixed(2)
    }
  },
  created () {
    console.log(this.$route)
  }
  /*
    filter主要用于过滤一些字段，像日期，保留两位小数这种等需要统一处理的可以全部注册，
    对于部分只针对某些页面的可以在当前页面局部注册
   */
}
</script>
