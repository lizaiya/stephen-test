<template>
  <div class="collapse-item" @click="toggle">
    <div class="title">{{title}}</div>
    <div class="content" v-if="show">
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
  data() {
    return {
        show:false
    }
  },
  methods:{
    toggle(){
        this.show? this.$bus.$emit('removeItem',this.name):this.$bus.$emit('addItem',this.name)
    }
  },
  mounted(){
      this.$bus.$on('update:selected',(names)=>{
          this.show=names.indexOf(this.name)>=0
      })
  }
}
</script>

<style scoped lang="scss">
.collapse-item {
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
  .title {
    padding: 5px 1em;
    border-bottom: 1px solid $gray;
    margin-bottom: -1px;
    cursor: pointer;
  }
  .content {
    color: red;
  }
}
</style>
