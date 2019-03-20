<template>
  <div>
    <s-cascader :options="options" popper-class="abc" @active-item-change="handleItemChange" v-model="selected" @change="handleChange" separator="-" :show-all-levels="false" :change-on-select="false">
    </s-cascader>
  </div>
</template>
<script>
import Cascader from './cascader.vue';
export default {
   components:{
       's-cascader':Cascader,
   },
   data(){
     return {
       options:[
            {
              value:'广东',
              children:[]
            },
            {
              value:'安徽',
              children:[]
            },
            {
              value:'江苏',
              children:[]
            }
        ],
        selected:[],
     }
   },
   methods:{
    handleChange(val){
        console.log('change',val)
      },
      handleItemChange(val){
        setTimeout(() => {
            if (val.indexOf('广东') > -1 && !this.options[0].children.length) {
              this.options[0].children = [{value: '广州',children:[{value:'白云区'}]}];
            }
            if (val.indexOf('安徽') > -1 && !this.options[1].children.length) {
              this.options[1].children = [{value: '安庆'}];
            }
            if (val.indexOf('江苏') > -1 && !this.options[2].children.length) {
              this.options[2].children = [{value: '南京'}];
            }
        }, 300);
      }
   }

}
</script>

