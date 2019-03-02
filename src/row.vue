<template>
  <div class="row" :style="{marginLeft:-(parseInt(gutter)/2)+'px',marginRight:-(parseInt(gutter)/2)+'px'}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "StepHenRow",
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if (this.gutter) {
        console.log(this.$children);
        vm.gutter = this.gutter;
        console.log(vm);
      }
    });
  }
};
</script>

<style lang="scss">
.row {
  display: flex;
}
</style>
