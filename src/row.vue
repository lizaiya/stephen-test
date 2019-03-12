<template>
  <div class="row" :style="rowStyle" :class="rowClasess">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "StepHenRow",
  props: {
    gutter: {
      type: [Number, String]
    },
    aligns: {
      type: String,
      default: "left",
      validator(val) {
        return ["left", "right", "center"].indexOf(val) >= 0;
      }
    }
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -(gutter / 2) + "px",
        marginRight: -(gutter / 2) + "px"
      };
    },
    rowClasess() {
      let { aligns } = this;
      return [`row-${aligns}`];
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if (this.gutter) {
        vm.gutter = this.gutter;
      }
    });
  }
};
</script>
<style lang="scss">
.row {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  &-left {
    justify-content: flex-start;
  }
  &-right {
    justify-content: flex-end;
  }
  &-center {
    justify-content: center;
  }
}
</style>
