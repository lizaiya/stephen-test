<template>
  <s-row class="row" :gutter="20" align="center">
    <s-col :span="6">
      <div class="bg-purple">6 </div>
    </s-col>
    <s-col :span="6">
      <div class="bg-purple">6 </div>
    </s-col>
    <s-col :span="6">
      <div class="bg-purple">6 </div>
    </s-col>
    <s-col :span="6">
      <div class="bg-purple">6 </div>
    </s-col>
  </s-row>
</template>

<script>
import Row from '../../../src/row.vue';
import Col from '../../../src/col.vue';

export default {
  components: {
      's-row':Row,
      's-col':Col
  },

}
</script>

<style scoped lang="scss">
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>
