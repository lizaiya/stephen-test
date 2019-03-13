<template>
  <div class="cascader-menu">
    <ul class="left" ref="left">
      <li v-for="(item,index) in items" :key="index" @click="selected(item)" class="cascader-items">
        {{item.value}}
      </li>
    </ul>
    <div class="right" v-if="selectedData" ref="right">
      <stephen-cascader-items :items="selectedData.children"></stephen-cascader-items>
    </div>
  </div>
</template>

<script>
export default {
  name:"StephenCascaderItems",
  props:{
    items:Array,
  },
  data() {
    return {
      selectedData:null
    }
  },
  methods:{
    selected(item){
      if(item.children&&item.children.length){
       this.selectedData=item;
      }else{
        this.selectedData=null;
      }
    }
  },

}
</script>

<style scoped lang="scss">
.cascader-menu {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  // height: 200px;
  // overflow: auto;

  .left {
    min-width: 150px;
    padding: 5px 0;
    .cascader-items {
      padding: 8px 20px;
      &:hover {
        background: #f5f7fa;
        cursor: pointer;
        white-space: nowrap;
      }
    }
  }
  .right {
    border-left: 1px solid $border-color-light;
  }
}
</style>
