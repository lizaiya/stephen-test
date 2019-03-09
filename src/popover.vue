<template>
  <div class="popover" @click="onClick" ref="popover">
    <div class="content-wrapper" v-if="visibility" :class="{[`position-${position}`]:true}" ref="contentWrapper">
      <slot name="content"></slot>
    </div>
    <span class="trigger-wrapper" ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'StephenPopover',
  props:{
    position:{
      type:String,
      default:'top',
      validator(value){
        return ['top','bottom','left','right'].indexOf(value)>=0;
      }
    }
  },
  data() {
    return {
      visibility: false
    }
  },
  methods: {
    onClick(e) {
      if (this.visibility) {
        this.close()
      } else {
        this.open()
      }
    },
    onClickDocument(e) {
       let popoverEl = this.$refs.popover,
        target = e.target,
        contentWrapperEl = this.$refs.contentWrapper
         if (popoverEl && (popoverEl === target || popoverEl.contains(target))) {return}
         if (contentWrapperEl &&(contentWrapperEl === target || contentWrapperEl.contains(target))) { return}
         this.close()
    },
    close() {
      this.visibility = false
      document.removeEventListener('click', this.onClickDocument)
    },
    setPosition() {
      this.$nextTick(() => {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        const scrollY=window.scrollY
        const scrollX=window.scrollX
        //将content-wrapper 添加到body里面
        let {width,height, left, top } = triggerWrapper.getBoundingClientRect()
        let {height: contentHeight} = contentWrapper.getBoundingClientRect()
        // top top + window.scrollY
        // bottom top + window.scrollY+height
        //left left+ window.scrollX
        //right left+ window.scrollX+width
        let positions = {
          top: {top: top + scrollY, left: left + scrollX},
          bottom: {top: top + height + scrollY, left: left + scrollX},
          left: {top: top + scrollY + (height - contentHeight) / 2,left: left + scrollX},
          right: {top: top + scrollY + (height - contentHeight) / 2,left: left + scrollX +width}
        }
        contentWrapper.style.left = positions[this.position].left + 'px'
        contentWrapper.style.top = positions[this.position].top + 'px'
        document.addEventListener('click', this.onClickDocument)
      })
    },
    open() {

      this.visibility = true
      this.setPosition()
    }
  }
}
</script>

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -15px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      border-bottom: none;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 20px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top: none;
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: black;
      border-right: none;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      border-left: none;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
    }
  }
}
</style>

