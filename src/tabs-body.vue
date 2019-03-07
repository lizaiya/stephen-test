<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "StephenTabsBody",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.tabs-body {
  flex-grow: 1;
}
</style>
