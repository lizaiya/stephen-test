<template>
  <div>
    <s-button @click="showToast">弹窗toast</s-button>
  </div>
</template>
<script>
 import Toast from '../../../src/toast.vue';
 import Button from '../../../src/button.vue';
 import Vue from 'vue'
import plugin from '../../../src/plugin';
Vue.use(plugin)
export default {
   components:{
       's-toast':Toast,
       's-button':Button,
   },
  methods:{
     showToast(){
       this.$toast(`<p>toast弹窗toast弹窗toast弹窗toast</p>`, {
                 autoClose: false,
                 enableHtml: true,
                 position: 'top',
                 closeButton:{text:'按钮关闭',callback:()=>{
                   console.log('点击关闭');
                 }}
             });
     }
  }
}
</script>

