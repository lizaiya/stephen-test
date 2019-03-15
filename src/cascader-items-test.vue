<template>
  <div class="cascader-menu" ref="cascaderMenu">
    <ul class="left" ref="left">
      <li v-for="(item,index) in items" :key="index" @click="onClickLabel(item)" :class="{ 'active-cascader-items': item.value===selected[level]}" class="cascader-items">
        <span>{{item.value}}</span>
        <s-icon name="right" v-if="item.children&&item.children.length"></s-icon>
      </li>
    </ul>

  </div>
</template>

<script>
import Icon from "@/icon"
export default {
  name:"StephenCascaderItemsTest",
  components:{
    's-icon':Icon
  },
  props:{
    items:Array,
    selected:Array,
    level:{type:Number,default:0}
  },
  methods:{
    onClickLabel(item){
      let {level}=this;
      let  copySelected=JSON.parse(JSON.stringify(this.selected));
           copySelected[level]=item.value;
           copySelected.splice(level + 1)
           //告知外部触发change事件；
          this.$listeners.change(copySelected)
    }
  }

}
</script>

<style scoped lang="scss">
.cascader-menu {
  // position: absolute;
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
      &.active-cascader-items {
        color: #409eff;
      }
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
