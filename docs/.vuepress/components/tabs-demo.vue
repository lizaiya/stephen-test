<template>
  <div>
    <s-tabs :selected="selectedTab">
      <s-tabs-head>
        <s-tabs-item name="video" disabled>视频课程</s-tabs-item>
        <s-tabs-item name="audio">音频课程</s-tabs-item>
        <s-tabs-item name="lecturer">讲师课程</s-tabs-item>
        <!-- <template slot="opeart">
          设置
        </template> -->
      </s-tabs-head>
      <s-tabs-body>
        <s-tabs-pane name="video">视频内容</s-tabs-pane>
        <s-tabs-pane name="audio">音频内容</s-tabs-pane>
        <s-tabs-pane name="lecturer">讲师内容</s-tabs-pane>
      </s-tabs-body>
    </s-tabs>
  </div>
</template>
<script>
import tabs from '../../../src/tabs.vue';
import tabsHead from '../../../src/tabs-head.vue';
import tabsItem from '../../../src/tabs-item.vue';
import tabsBody from '../../../src/tabs-body.vue';
import tabsPane from '../../../src/tabs-pane.vue';
import Vue from 'vue';
import plugin from '../../../src/plugin';
Vue.use(plugin)
export default {
   components:{
       's-tabs':tabs,
       's-tabs-head':tabsHead,
       's-tabs-item':tabsItem,
       's-tabs-body':tabsBody,
       's-tabs-pane':tabsPane,
   },
   data(){
     return {
       selectedTab: "lecturer"
     }
   },

}
</script>

