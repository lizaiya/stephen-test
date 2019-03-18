<template>
  <!-- v-bind:abcd="abcd" -->
  <div v-bind:abcd="abcd" @click="wo">{{abcd}}</div>
  <!-- <input type="text" v-bind:abcd="abcd" v-on:change="wo"> -->
  <!-- <s-input v-model="abcd"></s-input> -->
</template>
<script>
import Input from '@/input'
export default {
  model:{
    prop:'abcd',
    event:'change'
  },
  props:{
        abcd:String
  },
  components: {
    's-input':Input
  },
  methods:{
    wo( $event){

      this.$emit('change', '$event.target.value')
      // console.log($event.target.value)
    }

    // $emit('change', $event.target.abcd)
  },
  mounted () {
    console.log(this.abcd);
  }

}
</script>
<style lang="scss" scoped>
.StepHenTest {
}
</style>


