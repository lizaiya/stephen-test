<template>
  <div>
    <s-popover position="top" trigger="hover">
      <div slot="content">
        内容内容内容内容内内容内容内容内容内内容内容内容内容内内容内容内容内容
        内内容内容内容内容内内容内容内容内容内内容内容内容内容内内容内容内容内
        容内内容内容内容内容内内容内容内容内容内
      </div>
      <s-button>popover组件</s-button>
    </s-popover>
  </div>
</template>
<script>
import Popover from '../../../src/popover.vue';
import Button from '../../../src/button.vue';

import Vue from 'vue';
import plugin from '../../../src/plugin';
Vue.use(plugin)
export default {
   components:{
       's-popover':Popover,
       's-button':Button,
   },
   data(){
     return {
       selectedTab: "lecturer"
     }
   },

}
</script>

