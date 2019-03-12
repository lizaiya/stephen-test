<template>
  <div>

    <s-button-group>
      <s-button icon="left">上一页</s-button>
      <s-button>更多</s-button>
      <s-button icon="right" icon-position="right">下一页</s-button>
    </s-button-group>
  </div>
</template>
<script>
 import Button from '../../../src/button.vue';
 import ButtonGroup from '../../../src/button-group.vue';
export default {
   components:{
       's-button':Button,
       's-button-group':ButtonGroup
   },
   data(){
     return {

     }
   }
}
</script>

