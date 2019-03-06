<template>
  <div class="toast-wrap">
    <div class="toast" ref="toast">
      <div class="message">
        <slot></slot>
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
    //按钮 关闭和回调
    closeButton: {
      type: Object,
      defalut() {
        return { text: "关闭", callback: undefined };
      }
    }
  },
  methods: {
    updateStyle() {
      this.$nextTick(() => {
        if (this.$refs.close) {
          this.$refs.close.style.height = `${
            this.$refs.toast.getBoundingClientRect().height
          }px`;
        }
      });
    },
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
    this.updateStyle();
  }
};
</script>
<style scoped lang="scss">
$font-size: 14px;
$color: white;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast-wrap {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  .toast {
    background: $toast-bg;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
    color: $color;
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
    }
    .close {
      position: relative;
      padding: 8px 8px 8px 12px;
      flex-shrink: 0;
      flex-grow: 0;
      height: 100%;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 1px;
        background: white;
      }
    }
  }
}
</style>

