<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="opeart"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "StephenTabsHead",
  data() {
    return {};
  },
  mounted() {
    this.$bus.$on("update:selected", (item, vm) => {
      let left = vm.$el.offsetLeft;
      let width = vm.$el.getBoundingClientRect().width;
      this.$refs.line.style.width = `${width}px`;
      // this.$refs.line.style.left = `${left}px`;
      this.$refs.line.style.transform = `translateX(${left}px)`;
    });
  }
};
</script>

<style scoped lang="scss">
$tab-height: 40px;
$blue: #1890ff;
$border-color: #ddd;
.tabs-head {
  flex-shrink: 0;
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
    height: 1px;
  }
  > .actions-wrapper {
    margin-left: auto;
    padding: 0 1em;
  }
}
</style>
