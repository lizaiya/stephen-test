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
    this.$bus.$emit("update:selected", this.selected);
  }
};
</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  flex-direction: column;
}
</style>
