<template>
  <div>
      <div id="mount-point"></div>
  </div>
</template>
<script>
import extendTest from './extendTest'
import Vue from 'vue/dist/vue.esm.js'
export default {
  extends: extendTest,
  data () {
    return {
      a: '6'
    }
  },
  created () {

  },
  mounted () {
    var Profile = Vue.extend({
      template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
      data: function () {
        return {
          firstName: 'Walter',
          lastName: 'White',
          alias: 'Heisenberg'
        }
      }
    })
    // 创建 Profile 实例，并挂载到一个元素上。
    new Profile().$mount('#mount-point')
  }
}
</script>
