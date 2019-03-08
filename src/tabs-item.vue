<template>
  <!-- data-name属性方便测试 -->
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "StephenTabsItem",
  props: {
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return { active: this.active, disabled: this.disabled };
    }
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    onClick() {
      if (!this.disabled) {
        //禁止按钮
        this.$bus.$emit("update:selected", this.name, this);
        // this.$emit("update:selected", this.selected);
      }
    }
  },
  mounted() {
    this.$bus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  }
};
</script>

<style scoped lang="scss">
$blue: #1890ff;
$disabled-text-color: grey;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>
