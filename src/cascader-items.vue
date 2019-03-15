<template>
  <div class="cascader-menu" ref="cascaderMenu">
    <div>
      {{level}}
    </div>
    <ul class="left" ref="left">
      <li v-for="(item,index) in items" :key="index" @click="onClickLabel(item)" class="cascader-items" :class="{ 'active-cascader-items': item.value===$attrs.selected[level]}">
        <span>{{item.value}}</span>
        <s-icon name="right" v-if="item.children&&item.children.length"></s-icon>
      </li>
    </ul>
    <div class="right" v-if="rightItems" ref="right">
      <stephen-cascader-items :items="rightItems" :level="level+1" v-on="$listeners" v-bind="$attrs"></stephen-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from "@/icon"
export default {
  name:"StephenCascaderItems",
  components:{
    's-icon':Icon
  },
  props:{
    items:Array,
    level:{type:Number,default:0}
  },
  computed:{
   rightItems(){
      if(this.$attrs.selected[this.level]){
          let selected = this.items.filter((item) => item.value === this.$attrs.selected[this.level])
          if (selected && selected[0].children && selected[0].children.length > 0) {
            return selected[0].children
          }
      }
    }
  },
  inheritAttrs:false,
  methods:{
    onClickLabel(item){
     this.$bus.$emit('xxx',123)
     if(!item.children||!item.children.length){
      console.log('没有子元素 关闭弹出层');
      }
      let copy=JSON.parse(JSON.stringify(this.$attrs.selected));
      copy[this.level]=item.value;
      copy.splice(this.level + 1)
      if(this.$attrs.selected[this.level]!==item.value){
        //触发祖先的change事件
        this.$listeners.change(copy)
      }
     },
  },
  mounted(){


  }

}
</script>

<style scoped lang="scss">
.cascader-menu {
  position: absolute;
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
