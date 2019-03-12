<template>
  <div>
    <s-row class="row" align="center">
      <s-col :span="1">
        <div class="bg-purple-dark">1 </div>
      </s-col>
      <s-col :span="6">
        <div class="bg-purple">6 </div>
      </s-col>
      <s-col :span="9">
        <div class="bg-purple-dark">9 </div>
      </s-col>
      <s-col :span="8">
        <div class="bg-purple">8 </div>
      </s-col>
    </s-row>
    <s-row class="row" align="center">
      <s-col :span="4">
        <div class="bg-purple-dark">4 </div>
      </s-col>
      <s-col :span="8">
        <div class="bg-purple">8 </div>
      </s-col>
      <s-col :span="8">
        <div class="bg-purple-dark">8 </div>
      </s-col>
      <s-col :span="4">
        <div class="bg-purple">4 </div>
      </s-col>
    </s-row>
    <s-row class="row" align="center">
      <s-col :span="2">
        <div class="bg-purple-dark">2 </div>
      </s-col>
      <s-col :span="10">
        <div class="bg-purple">10 </div>
      </s-col>
      <s-col :span="3">
        <div class="bg-purple-dark">3 </div>
      </s-col>
      <s-col :span="9">
        <div class="bg-purple">9 </div>
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
