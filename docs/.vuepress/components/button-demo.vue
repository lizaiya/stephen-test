<template>
  <div>
    <s-button>默认样式</s-button>
    <s-button icon-position="left" :loading="true">loading</s-button>
    <s-button icon-position="left" icon="settings">icon左</s-button>
    <s-button icon-position="right" icon="settings">icon右</s-button>
    <s-button icon="settings"></s-button>
    <s-button :loading="loading" @click="loading=!loading">切换loading</s-button>

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
       loading:false
     }
   }
}
</script>

