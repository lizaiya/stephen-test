<template>
  <div>
    <s-layout>
      <s-header>header</s-header>
      <s-main>main</s-main>
    </s-layout>
    <hr>
    <s-layout>
      <s-header>header</s-header>
      <s-main>main</s-main>
      <s-footer>footer</s-footer>
    </s-layout>
    <hr>
    <s-layout>
      <s-aside>aside</s-aside>
      <s-main>main</s-main>
    </s-layout>
    <hr>
    <s-layout>
      <s-header>header</s-header>
      <s-layout>
        <s-aside>aside</s-aside>
        <s-main>main</s-main>
      </s-layout>
      <s-footer>footer</s-footer>
    </s-layout>
    <hr>
    <s-layout>
      <s-header>header</s-header>
      <s-layout>
        <s-aside>aside</s-aside>
        <s-layout>
          <s-main>main</s-main>
          <s-footer>footer</s-footer>
        </s-layout>
      </s-layout>
    </s-layout>
    <hr>
    <s-layout>
      <s-header>header</s-header>
      <s-layout>
        <s-aside>aside</s-aside>
        <s-main>main</s-main>
      </s-layout>
    </s-layout>
    <hr>
    <s-layout>
      <s-aside>aside</s-aside>
      <s-layout>
        <s-header>header</s-header>
        <s-main>main</s-main>
        <s-footer>footer</s-footer>
      </s-layout>
    </s-layout>

  </div>

</template>

<script>
import Layout from '../../../src/layout.vue';
import Header from '../../../src/header.vue';
 import Main from '../../../src/main.vue';
 import Footer from '../../../src/footer.vue';
 import Aside from '../../../src/aside.vue';
export default {
  components: {
      's-layout':Layout,
      's-header':Header,
      's-main':Main,
       's-footer':Footer,
       's-aside':Aside,
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
.layout {
  text-align: center;
}
.header {
  background: #b3c0d1;
}
.main {
  background: #e9eef3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer {
  background: #b3c0d1;
}
.aside {
  background: #d3dce6;
  display: flex;
  align-items: center;
}
</style>
