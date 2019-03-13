<template>
  <div class="cascader">
    <div class="trigger" @click="visibility=!visibility"></div>
    <div class="popover-wrapper" v-if="visibility">
      <s-cascader-item :items="options"></s-cascader-item>
    </div>
  </div>
</template>

<script>
import CascaderItem from '@/cascader-items'
export default {
  name:"StepHenCascader",
  props:{
      options:{
          type:Array,
          required:true
      }
  },
  components:{
      's-cascader-item':CascaderItem
  },
  data() {
    return {
      visibility:false
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
    height: 32px;
    border: 1px solid red;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    margin-top: 8px;
    z-index: 1;
    @extend .box-shadow;
  }
}
</style>
