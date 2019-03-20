<template>
  <div>
    <s-collapse :activeNames.sync="activeNames" :single="false">
      <s-collapse-item title="标题1" name="1">内容1</s-collapse-item>
      <s-collapse-item title="标题2" name="2">内容2</s-collapse-item>
      <s-collapse-item title="标题3" name="3">内容3</s-collapse-item>
    </s-collapse>
    {{activeNames}}
  </div>
</template>
<script>
import Callapse from '../../../src/collapse.vue';
import CallapseItem from '../../../src/collapse-item.vue';
import Vue from 'vue';
import plugin from '../../../src/plugin';
Vue.use(plugin)
export default {
   components:{
       's-collapse':Callapse,
       's-collapse-item':CallapseItem,
   },
   data(){
     return {
       activeNames: ['1']
     }
   }

}
</script>

