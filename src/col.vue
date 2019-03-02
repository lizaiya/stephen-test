<template>
  <div class="col" :class="[`col_${span}`]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "StepHenCol",
  props: {
    span: {
      type: [Number, String]
    }
  }
};
</script>

<style lang="scss" scoped>
//前缀
$class-prefix: col_;

.col {
  height: 100px;
  background: grey;
  border: 1px solid red;
  width: 100%;
  // 循环24次
  @for $n from 1 through 24 {
    // scss插值语法 #{} 对比 js插值语法 ￥{};
    &.#{$class-prefix}#{$n} {
      width: $n/24 * 100%;
    }
  }
}
</style>
