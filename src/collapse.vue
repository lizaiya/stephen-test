<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"StepHenCollapse",
   model: {
        prop: 'activeNames',
        event: 'change'
   },
  props:{
      activeNames:{
          type:Array,
          required:true
      },
      single:{
          type:Boolean,
          default:false
      }
  },
  data() {
    return {

    }
  },
  mounted () {
    this.$bus.$emit('update:selected',this.activeNames) //初始化选项子组件默认状态，
       this.$bus.$on('addItem',(value)=>{ //添加选中子组件
            let activeNamesCopy=JSON.parse(JSON.stringify(this.activeNames)) //深拷贝 不能修改props的值
            if(this.single){
                 activeNamesCopy=[value];
             }else{
                if(!(activeNamesCopy.indexOf(value)>=0)){
                    activeNamesCopy.push(value)
                }
            }
             this.$emit('change', activeNamesCopy)// 通知父组件 change事件
            this.$bus.$emit('update:selected',activeNamesCopy) //分发消息给子组件 改变其状态
        });
        this.$bus.$on('removeItem',(value)=>{//移除选中子组件
            let activeNamesCopy=JSON.parse(JSON.stringify(this.activeNames)) //深拷贝 不能修改props的值
            let index=activeNamesCopy.indexOf(value);
            activeNamesCopy.splice(index,1)
            this.$emit('change', activeNamesCopy)// 通知父组件 change事件
            this.$bus.$emit('update:selected',activeNamesCopy) //分发消息给子组件 改变其状态
        });


  }
}
</script>

<style scoped lang="scss">
$gray: gray;
$border-radius: 4px;
.collapse {
  border: 1px solid $gray;
  border-radius: $border-radius;
}
</style>
