<template>
  <div class="stephen-collapse-item" @click="toggle">
    <div class="stephen-title">{{title}}</div>
    <div class="stephen-content" v-if="open ">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"StepHenCollapseItem",
  props:{
      title:{
          type:String,
          required:true
      },
      name:{
          type:String,
          required:true
      }
  },
  inject: ['eventBus'],
  data() {
    return {
        open :false
    }
  },
  methods:{
    toggle(){
      if(this.open){//删除
        this.eventBus.$emit('update:removeSelected',this.name)
      }else{//添加
        this.eventBus.$emit('update:addSelected',this.name)
      }
    }
  },
  mounted(){
       this.eventBus && this.eventBus.$on('update:selected',(names)=>{
         this.open =names.indexOf(this.name)>=0
      })
  }
}
</script>
<style scoped lang="scss">
.stephen-collapse-item {
  border: 1px solid $gray;
  margin-left: -1px;
  margin-right: -1px;
  margin-top: -1px;
  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &:last-child {
    margin-bottom: -1px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .stephen-title {
    padding: 5px 1em;
    border-bottom: 1px solid $gray;
    margin-bottom: -1px;
    cursor: pointer;
  }
  .stephen-content {
    color: red;
  }
}
</style>
