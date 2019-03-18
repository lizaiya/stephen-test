<template>
  <div class="cascader position-top" v-click-outside="close">
    <div class="trigger" v-bind:selected="selected" @click="show">{{showAllLevels?selected:selected[selected.length-1]}}</div>
    <div class="popover-wrapper" v-if="visibility" :class="popperClass">
      <div v-for="(children,index) in childrensCom" :key="index" v-model="childrenSelected" :level="index" @updateVisibility="close" v-on="$listeners" :is="children.component" :items="children.options">
      </div>
    </div>
  </div>
</template>
<script>
import CascaderItemTest from '@/cascader-items-test'
import Input from '@/input'
import ClickOutside from '@/click-outside'
import Test from './test'
export default {
  name:"StepHenCascader",
  directives: {
    ClickOutside
  },
  components:{
   's-cascader-item-test':CascaderItemTest,
   's-input':Input
  },
  model:{
    prop:'selected',
    event:'change'
  },
    data() {
    return {
      childrenSelected:[],
      visibility:false,
      childrensCom:[]
    }
  },
  inheritAttrs:false,
  props:{
    popperClass:String,
    default:'',
    //是否在输入框显示完整路径
    showAllLevels:{
      type:Boolean,
      default:true
    },
    //选择既改变输入框的值
    changeOnSelect:{
      type:Boolean,
      default:false
    },
    //分隔符
      separator:{
        type:String,
        default:'/'
      },
      selected:{
        type:Array
      },
    //加载数据
      options:{
          type:Array,
          required:true
      },
  },
  watch:{
    childrenSelected:{
      handler: function (newVal,oldVal){
        let level=this.childrenSelected.length-1;
        let item=this.initCascader(this.options,newVal,'add')[level]
        this.upDateItem(newVal)
        //是否选中既改变
        if(this.changeOnSelect){
          let newValStr=JSON.stringify(newVal);
          let selectedStr=JSON.stringify(this.selected);
          if((!item || !item.children||item.children.legnth)&&(newValStr!==selectedStr)){
            //'触发外部cahnge组件'
            this.$listeners.change(newVal)
          }
        }else{
           //触发外部change事件
          this.$listeners.change(newVal);
        }
        //动态加载
        if(this.$listeners['active-item-change']){
            if(JSON.stringify(oldVal)!==JSON.stringify(newVal)){
              if(item && item.value){
                  this.$listeners['active-item-change'](item.value)
               }
            }
        }
       },
      deep:true
    },
    options:{
      handler:function(newVal,oldVal){
        this.upDateItem(this.childrenSelected)
      },
      deep:true
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
        //如果当前没有默认值 就默认弹出第一层
        if(!this.selected.length){
          this.add('s-cascader-item-test',this.options)
        }
        this.open()
      }
    },
    //选中的item是否有子节点 并添加item
    activeChange(item,level){
      if(item&&item.children&&item.children.length){
          this.childrensCom.splice(level + 1)
          this.add('s-cascader-item-test',item.children)
        }
    },
  },
  mounted(){
    this.childrenSelected=this.selected;
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
    margin-top: 15px;
    z-index: 1;
    min-height: 150px;
    @extend .box-shadow;
    &::before,
    &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
      border-top: none;
      left: 2em;
      z-index: 2;
    }
    &::after {
      border-bottom-color: white;
      top: -10px;
    }
    &::before {
      border-bottom-color: #ccc;
      top: -11px;
    }
  }
}
</style>
