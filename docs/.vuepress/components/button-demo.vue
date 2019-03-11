<template>
  <div>
      <s-button icon-position="left" :loading="true">loading</s-button>
      <s-button>默认样式</s-button>
  </div>
</template>
<script>
 import Button from '../../../src/button.vue';
export default {
   components:{
       's-button':Button
   }
}
</script>

