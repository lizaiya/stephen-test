<template>
  <div>
    <s-row class="row" align="center">
      <s-col :span="8">
        <div class="bg-purple-dark">8</div>
      </s-col>
      <s-col :span="6" offset="2">
        <div class="bg-purple-dark">6</div>
      </s-col>
      <s-col :span="4" offset="4">
        <div class="bg-purple-dark">4</div>
      </s-col>
    </s-row>
    <s-row class="row" align="center">
      <s-col :span="2" offset="4">
        <div class="bg-purple-dark">2</div>
      </s-col>
      <s-col :span="5" offset="5">
        <div class="bg-purple-dark">5</div>
      </s-col>
      <s-col :span="4" offset="4">
        <div class="bg-purple-dark">4</div>
      </s-col>
    </s-row>

  </div>
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

.row {
  margin: 10px 0;
}
</style>
