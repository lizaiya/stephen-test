<template>
  <div class="tabs">
    <slot></slot>

  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "StephenTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "vertical",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
    }
  },

  data() {
    return {};
  },

  mounted() {
    if (this.$children.length === 0) {
      console &&
        console.warn &&
        console.warn("tabs没有子组件，应该是tabs-head和tabs-body");
    }
    this.$children.forEach(vm => {
      if (vm.$options.name === "StephenTabsHead") {
        vm.$children.forEach(node => {
          if (
            node.$options.name === "StephenTabsItem" &&
            node.name === this.selected
          ) {
            this.$bus.$emit("update:selected", this.selected, node);
          }
        });
      }
    });
  }
};
</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  flex-direction: column;
}
</style>
