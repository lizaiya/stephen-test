<template>
  <div class="collapse" :selected="selected">
    <slot></slot>
  </div>
</template>
<script>
 import Vue from 'vue'
export default {
  name:"StepHenCollapse",
   model: {
        prop: 'selected',
        event: 'change'
   },
  props:{
      selected:{
          type:Array,
          required:true
      },
      single:{
          type:Boolean,
          default:true
      }
  },
  provide (){
    return {
      eventBus: this.eventBus
    }
  },
  data() {
    return {
      eventBus:new Vue()
    }
  },
  mounted () {
    //更新collapse-item的数据
    this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on('update:addSelected',(name)=>{
       let copySelected=JSON.parse(JSON.stringify(this.selected));
     if(this.single){//单选
      copySelected=[name]
     }else{//多选
      if(!(copySelected.indexOf(name)>=0)){
         copySelected.push(name);
      }
     }
     //更新collapse-item的数据
     this.eventBus.$emit('update:selected',copySelected)
     this.$emit('change',copySelected)
    })
    this.eventBus.$on('update:removeSelected',(name)=>{
       let copySelected=JSON.parse(JSON.stringify(this.selected));
       let index=copySelected.indexOf(name)
       copySelected.splice(index,1)
        //更新collapse-item的数据
       this.eventBus.$emit('update:selected',copySelected)
       //触发外界change
       this.$emit('change',copySelected)

    })
  }
}
</script>

<style scoped lang="scss">
.collapse {
  border: 1px solid $gray;
  border-radius: $border-radius;
}
</style>
