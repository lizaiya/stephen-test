<template>
  <div class="cascader-menu" ref="cascaderMenu">
    <ul class="left">
      <li v-for="(item,index) in items" :key="index" @click="onClickLabel(item)" :class="{ 'active-cascader-items': item.value===selected[level],'icon': item.children}" class="cascader-items">
        <span>{{item.value}}</span>
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
  model:{
    prop:'selected',
    event:'a'
  },
  props:{
    items:Array,
    selected:Array,
    level:{type:Number,default:0}
  },
  computed: {
  },
  methods:{
    onClickLabel(item){
      let {level}=this;
      //没有子节点就关闭弹窗
     if(this.$listeners['active-item-change']){
        //动态添加次级选项
        if(!item.children){
          this.$emit("updateVisibility")
        }
     }else{
         if(!item.children|| !item.children.length){
            this.$emit("updateVisibility")
          }
      }
     //深拷贝 不能改变父组件的props
     let  copySelected=JSON.parse(JSON.stringify(this.selected));
          copySelected[level]=item.value;
          copySelected.splice(level + 1)
          this.$emit('a',copySelected)
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
      position: relative;
      &.icon:before {
        position: absolute;
        right: 1em;
        font-family: 'stephen';
        content: '\e60c';
        top: 50%;
        transform: translateY(-50%);
      }
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
}
.cascader-menu + .cascader-menu {
  border-left: 1px solid $border-color-light;
}
</style>
