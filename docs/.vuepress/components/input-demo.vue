<template>
  <div>
    <s-input placeholder="禁用" value="张三" disabled></s-input>
    <s-input placeholder="只读" value="张三" :readonly="true"></s-input>
    <s-input placeholder="error样式" value="李四" error="姓名不能少于两个字"></s-input>
    <p>
      <s-input placeholder="change事件" value="王五" @changes="inputChange" v-model="message"></s-input>
    </p>
  </div>
</template>

<script>
 import Input from '../../../src/input.vue';

export default {
    components:{
       's-input':Input
   },
  data() {
    return {
        message:''
    }
  },
  methods:{
      inputChange(val){
          console.log('改变')
      },
      inputEvent(val){
          console.log('输入')
      }
  }
}
</script>

<style scoped lang="scss">
</style>
