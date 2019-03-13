<template>
  <!-- v-model 需要组件设置value="value"  和绑定input事件 -->
  <div class="wrapper" :class="{error}">
    <input type="text" :placeholder="placeholder" :value="value" :disabled="disabled" :readonly="readonly" @change="$emit('changes',$event.target.value)" @input="$emit('input',$event.target.value)" @focus="$emit('focus',$event.target.value)" @blur="$emit('blur',$event.target.value)">
    <template v-if="error">
      <s-icon name='error' class="icon-error"></s-icon>
      <span class="errorMsg">{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "StephenInput",
  components: { "s-icon": Icon },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      type: String|Number,
      default: ""
    },
    error: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5rem;
  }
  > input {
    height: $height;
    @include border(#999);
    border-radius: $border-radius;
    font-size: inherit;
    padding: 0 8px;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #ccc;
      color: #777;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMsg {
    color: $red;
  }
}
</style>


