<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'StephenLayout',
    data(){
        return {
            layoutClass:{
                hasSider:false
            }
        }
    },
    mounted(){
        let children=this.$children;
        children.forEach(vm=>{
           if(vm.$options.name==='StephenAside'){
            this.layoutClass.hasSider = true;
           }
        })
       
    }
}
</script>
<style lang="scss" scoped>
    .layout{
        flex-grow:1;
        display:flex;
        flex-direction: column;
        min-height:200px;
        &.hasSider{
            flex-direction:row;
        }
    }
</style>


