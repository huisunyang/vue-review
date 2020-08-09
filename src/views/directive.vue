<template>
  <div>
    <img v-imgUrl="url" width="100" height="100"/>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.directive('imgUrl', function (el, binding) {
  console.log('binding', binding)
  var color = Math.floor(Math.random() * 1000000)// 设置随机颜色
  el.style.backgroundColor = '#' + color

  var img = new Image()
  img.src = binding.value// -->binding.value指的是指令后的参数
  img.onload = function () {
    console.log('111111')
    el.style.backgroundColor = ''
  }
  el.src = binding.value
  console.log('el', el)
})
export default {
  data () {
    return {
      url: require('../assets/logo.png')
    }
  }
}
</script>
