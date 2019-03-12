<template>
  <div>
    <s-row class="row" align="center">
      <s-col class="bg-purple-dark" :span="24" :ipad="{span:17}" :narrow-pc="{span:14}" :pc="{span:8}" :wide-pc="{span:4}"></s-col>
      <s-col class="bg-purple" :span="24" :ipad="{span:6}" :narrow-pc="{span:5}" :pc="{span:16}" :wide-pc="{span:20}"></s-col>
    </s-row>
    <s-row class="row" align="center">
      <s-col class="bg-purple-dark" :span="24" :ipad="{span:17}" :narrow-pc="{span:14}" :pc="{span:8}" :wide-pc="{span:4,offset:1}"></s-col>
      <s-col class="bg-purple" :span="24" :ipad="{span:6}" :narrow-pc="{span:5}" :pc="{span:16}" :wide-pc="{span:14,offset:5}"></s-col>
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
