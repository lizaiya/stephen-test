<template>
  <div>
    <s-row class="row" align="center">
      <s-col :span="24">
        <div class="bg-purple-dark">24</div>
      </s-col>
    </s-row>
    <s-row class="row" align="center">
      <s-col :span="12">
        <div class="bg-purple">12 </div>
      </s-col>
      <s-col :span="12">
        <div class="bg-purple-light">12 </div>
      </s-col>
    </s-row>
    <s-row class="row" align="center">
      <s-col :span="8">
        <div class="bg-purple">8 </div>
      </s-col>
      <s-col :span="8">
        <div class="bg-purple-light">8 </div>
      </s-col>
      <s-col :span="8">
        <div class="bg-purple">8 </div>
      </s-col>
    </s-row>
    <s-row class="row" align="center">
      <s-col :span="6">
        <div class="bg-purple">6 </div>
      </s-col>
      <s-col :span="6">
        <div class="bg-purple-light">6 </div>
      </s-col>
      <s-col :span="6">
        <div class="bg-purple">6 </div>
      </s-col>
      <s-col :span="6">
        <div class="bg-purple-light">6 </div>
      </s-col>
    </s-row>
    <s-row class="row" align="center">
      <s-col :span="4">
        <div class="bg-purple">4 </div>
      </s-col>
      <s-col :span="4">
        <div class="bg-purple-light">4 </div>
      </s-col>
      <s-col :span="4">
        <div class="bg-purple">4 </div>
      </s-col>
      <s-col :span="4">
        <div class="bg-purple-light">4 </div>
      </s-col>
      <s-col :span="4">
        <div class="bg-purple">4 </div>
      </s-col>
      <s-col :span="4">
        <div class="bg-purple-light">4 </div>
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
  // text-align: center;
}
.bg-purple {
  background: #d3dce6;
  // text-align: center;
}
.bg-purple-light {
  background: #e5e9f2;
  // text-align: center;
}

.row {
  margin: 10px 0;
}
</style>
