<template>
  <div class="col" :class="[span&&`col-${span}`,offset&&`offset-${offset}`]" :style="{paddingLeft:(gutter/2)+'px',paddingRight:(gutter/2)+'px'}">
    <div style="border:1px solid green;height:100px;">
      <slot></slot>
    </div>

  </div>
</template>
<script>
export default {
  name: "StepHenCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      gutter: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  //   background: grey;
  //   border: 1px solid red;
  width: 100%;
  // 循环24次
  //前缀
  $class-prefix: col-;
  @for $n from 1 through 24 {
    // scss插值语法 #{} 对比 js插值语法 ￥{};
    &.#{$class-prefix}#{$n} {
      width: $n/24 * 100%;
    }
  }
  //前缀
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    // scss插值语法 #{} 对比 js插值语法 ￥{};
    &.#{$class-prefix}#{$n} {
      margin-left: $n/24 * 100%;
    }
  }
}
</style>
