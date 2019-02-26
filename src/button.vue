<template>
  <!-- <button class="s-button" :class="{[`icon-${iconPosition}`]:true}"> -->
  <!-- 自定义 -->
  <button class="s-button" :class="`icon-${iconPosition}`">
    <svg class="icon" aria-hidden="true" v-if="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props:['icon','iconPosition']//left or right
};
</script>
<style lang="scss" >
.s-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 .85em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-content: center;
  &:hover {border-color: var(--border-hover-color);}
  &:active {background: var(--button-active-bg);}
  &:focus {outline: none;}
  >.content{order:2;}
  >.icon{order:1;margin-right:.3em;}
  &.icon-right {
    >.content{order:1;}
    >.icon{order:2;margin:0 0 0 .3em; }
  }
}
</style>



