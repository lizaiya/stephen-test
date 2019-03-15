<template>
  <div class="cascader">
    <div class="trigger" @click="show">{{selected}}</div>
    <div class="popover-wrapper" v-if="visibility">
      <div v-for="(children,index) in childrensCom" :key="index" :selected="selected" :level="index" v-on="$listeners" :is="children.component" :items="children.options" >
      </div>
    </div>
  </div>
</template>
<script>
// import CascaderItem from '@/cascader-items'
import CascaderItemTest from '@/cascader-items-test'
import Test from './test'
export default {
  name:"StepHenCascader",
  components:{
    's-test':Test,
    // 's-cascader-item':CascaderItem
    's-cascader-item-test':CascaderItemTest
  },
  model:{
    prop:'selected',
    event:'change'
  },
  inheritAttrs:false,
  props:{
    //分隔符
      separator:{
        type:String,
        default:'/'
      },
      selected:Array,
    //加载数据
      options:{
          type:Array,
          required:true
      },
  },
  watch:{
    selected:{
      handler: function (newVal,oldVal){

       let level=this.selected.length-1;
       let item=this.initCascader(this.options,newVal,'add')[level]
       this.upDateItem(newVal)
       if(this.$listeners['active-item-change']){
        if(JSON.stringify(oldVal)!==JSON.stringify(newVal)){
           console.log('123')
            this.$listeners['active-item-change'](item.value)
         }

        //  console.log(item.value)

       }
      },
      deep:true
    },
    options:{
      handler:function(newVal,oldVal){
         this.upDateItem(this.selected)
      },
      deep:true
    }
  },
  data() {
    return {
      visibility:false,
      childrensCom:[]
    }
  },
  methods:{
    upDateItem(selected){
        let level=selected.length-1;
        let item=this.initCascader(this.options,selected,'add')[level]
        this.activeChange(item,level)
    },
    initCascader(options,selected,type='init'){
      let arr=[];
      let search=(options,value,i)=>{
        for(let index=0;index < options.length;index++){
          let item=options[index];
          if(item.value===value){
            if(type==='init'){
              this.childrensCom.push({component:'s-cascader-item-test', options:options});
            }else{
               arr.push(item);
            }
            if(item.children&&item.children.length){
                search(item.children,selected[i+1],i+1,type)
              }
            }
          }
      }
      search(options,selected[0],0,type);
      return arr;
    },

    open(){
      this.visibility=true;
    },
    close(){
       this.visibility=false;
    },
    add(component,options){
      this.childrensCom.push({component, options})
    },
    show(){
     if( this.visibility){
        this.close()
      }else{
        if(!this.selected.length){
          this.add('s-cascader-item-test',this.options)
        }
        this.open()
      }
    },
    activeChange(item,level){
      if(item&&item.children&&item.children.length){
          this.childrensCom.splice(level + 1)
          this.add('s-cascader-item-test',item.children)
        }
    },

  },
  mounted(){
    if(this.selected.length){
      this.initCascader(this.options,this.selected)
    }
  }
}
</script>
<style scoped lang="scss">
.cascader {
  display: inline-block;
  position: relative;
  border-radius: $border-radius;
  .trigger {
    min-width: 10em;
    height: $height;
    background: white;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    margin-top: 8px;
    z-index: 1;
    @extend .box-shadow;
  }
}
</style>
