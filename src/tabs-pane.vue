<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "StephenTabsPane",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    classes() {
      return { active: this.active };
    }
  },
  data() {
    return {
      active: false
    };
  },

  created() {
    this.$bus.$on("update:selected", name => {
      this.active = name === this.name;
      // console.log(`传值${name},我自身的值${this.name}`);
    });
  }
};
</script>

<style scoped lang="scss">
.tabs-pane {
  &.active {
    background: red;
  }
}
</style>
