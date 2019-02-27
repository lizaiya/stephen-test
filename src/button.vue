<template>
  <!-- <button class="s-button" :class="{[`icon-${iconPosition}`]:true}"> -->
  <!-- 自定义 -->
  <button class="s-button" :class="`icon-${iconPosition}`" @click="$emit('click')">
    <s-icon class="icon" :name="icon" v-if="icon&&!loading"></s-icon>
    <s-icon class="loading icon" name="loading" v-if="loading"></s-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  //props:['icon','iconPosition']//left or right
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      //属性检查器
      validator(value) {
        return value === "left" || value === "right";
        // return !(value !=='left'&& value !=='right');
        // if(value!=='left' && value!=='right'){
        //   return false;
        // }
        // return true;
      }
    }
  }
};
</script>
<style lang="scss" >
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.s-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 0.85em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-hover-color);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .content {
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



