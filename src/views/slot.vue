<template>
  <div>
      <children>
        <!-- 匿名插槽使用 -->
        <!-- <span>这是在父组件中写的</span> -->
        <!-- 具名插槽使用 -->
        <!-- <h3>{{test}}</h3>
        <p slot="header">header</p>
        <p slot='footer'>footer</p> -->
        <!-- 作用域插槽 -->
        <!-- <template v-slot:todo="slotProps" >
          {{slotProps}}
        </template> -->
        <!-- 解构作用域插槽 -->
        <template v-slot:todo="{test,user}" >
          {{test}} --- {{user}}
        </template>
      </children>
  </div>
</template>
<script>
import Children from './slotChildren'
export default {
  data () {
    return {
      test: '我是父组件的test'
    }
  },
  components: {
    Children
  }
}
</script>
<style>

</style>
