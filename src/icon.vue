<template>
  <svg class="s-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
import "./svg";
export default {
  name: "StephenIcon",
  props: ["name"]
};
</script>
<style lang="scss" scoped>
.s-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>


