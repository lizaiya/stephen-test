<template>
  <div class="tabs-head">
    <slot></slot>
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
  // created() {
  //   this.$emit("update:selected", "tabs-head 抛出的数据");
  // },
  mounted() {}
};
</script>

<style scoped lang="scss">
$tab-height: 40px;
$blue: blue;
$border-color: #ddd;
.tabs-head {
  flex-shrink: 0;
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  > .actions-wrapper {
    margin-left: auto;
    padding: 0 1em;
  }
}
</style>
