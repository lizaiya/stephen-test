<template>
  <!-- <button class="s-button" :class="{[`icon-${iconPosition}`]:true}"> -->
  <!-- 自定义 -->
  <button class="s-button" :class="`icon-${iconPosition}`" @click="$emit('click')">
    <s-icon class="icon" :name="icon" v-if="icon&&!loading"></s-icon>
    <s-icon class="loading icon" name="loading" v-if="loading"></s-icon>
    <div class="s-button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon.vue";
export default {
  name: "StephenButton",
  components: {
    "s-icon": Icon
  },
  props: {
    //icon图标
    icon: {},
    //是否显示loading状态
    loading: {
      type: Boolean,
      default: false
    },
    //icon放置位置
    iconPosition: {
      type: String,
      default: "left",
      //属性检查器
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.s-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 0.85em;
  font: inherit;
  border-radius: $border-radius;
  @include border(#999);

  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .s-button-content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .s-button-content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin: 0 0 0 0.3em;
    }
  }
  .loading {
    animation: spin 1s linear infinite;
  }
}
</style>
