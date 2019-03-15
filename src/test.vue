<template>
  <div class="StepHenTest">
    <ul @click="abc">
      <li>1可以仅在输入框中显示</li>
      <li>2可以仅在输入框中显示</li>
      <li>3可以仅在输入框中显示</li>
      <li>4可以仅在输入框中显示</li>
    </ul>
  </div>
</template>
<script>

export default {
    props:{
        text:String
    },
     data(){
         return {

         }
     },
     methods:{
         abc(){
             console.log(this.text)
         }
     }

}
</script>
<style lang="scss" scoped>
.StepHenTest {
  color: red;
  > ul {
    white-space: nowrap;
  }
}
</style>


