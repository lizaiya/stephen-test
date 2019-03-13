<template>
  <div class="toast-wrap" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message" :style="showBorder">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="close" @click="clickClose" v-if="closeButton" ref="close">
        {{closeButton.text}}
      </div>
    </div>
  </div>

</template>
<script>
/**
 * toast组件
 * @param autoClose Boolean:决定是否自动关闭 默认true 自动关闭, Number 数值后关闭
 * @param closeButton Object 不传不显示按钮 {text:'',callback} text按钮文字 callback 回调函数
 */
export default {
  name: "StePhenToast",
  props: {
    //是否自动关闭
    autoClose: {
      type: [Boolean, Number],
      default: 3000,
      validator(value) {
        return value === false || typeof value === "number";
      }
    },
    //是否渲染为html
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "middle", "bottom"].indexOf(value) >= 0;
      }
    },
    //按钮 关闭和回调
    closeButton: {
      type: Object,

      defalut() {
        return { text: "关闭", callback: undefined };
      }
    }
  },
  computed: {
    showBorder() {
      return this.closeButton
        ? { borderRight: "1px solid white" }
        : { borderRight: "none" };
    },
    toastClasses() {
      return { [`position-${this.position}`]: true };
    }
  },
  methods: {
    //关闭 销毁toast
    close() {
      this.$el.remove();
      //用于清除重复的实例
      this.$emit("close");
      this.$destroy();
    },
    //根据 autoclose 参数决定怎么关闭
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose);
      }
    },
    //点击关闭按钮
    clickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
    }
  },
  mounted() {
    this.execAutoClose();
  }
};
</script>
<style scoped lang="scss">
.toast-wrap {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  .toast {
    background: $toast-bg;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
    color: $color;
    @include color(#333);
    font-size: $font-size;
    border-radius: 4px;
    display: flex;
    line-height: 1.8;
    max-width: 400px;
    align-items: center;
    min-height: $toast-min-height;
    .message {
      padding: 8px 12px 8px 8px;
      flex-grow: 1;
      //   border-right: 1px solid white;
    }
    .close {
      position: relative;
      padding: 8px 8px 8px 12px;
      flex-shrink: 0;
      flex-grow: 0;
      cursor: pointer;
    }
  }
}
</style>

