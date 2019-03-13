<template>
  <div>
    <s-button>按钮</s-button>
    <s-button-group>
      <s-button icon="left">上一页</s-button>
      <s-button icon="left">更多</s-button>
      <s-button icon="right" icon-position="right">下一页</s-button>
    </s-button-group>

  </div>
</template>
<script>
import Button from './button'
import ButtonGroup from './button-group'
export default {
    name:'demo',
    components: {
        's-button':Button,
        's-button-group':ButtonGroup
    }
}
</script>

<style lang="scss" scoped>
.abc {
  color: $color;
}
</style>

