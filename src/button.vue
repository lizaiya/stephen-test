<template>
  <button class="s-button">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#i-settings"></use>
    </svg>
    <slot></slot>
  </button>
</template>
<script>
export default {};
</script>
<style lang="scss" >
.s-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-hover-color);
  }

  &:active {
    background: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}
</style>



