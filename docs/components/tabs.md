---
title: Tabs
sidebarDepth: 2
---

# 标签页
Tabs
<ClientOnly><tabs-demo></tabs-demo></ClientOnly>

```
<s-tabs :selected="selectedTab">
    <s-tabs-head>
        <s-tabs-item name="video" disabled>视频课程</s-tabs-item>
        <s-tabs-item name="audio">音频课程</s-tabs-item>
        <s-tabs-item name="lecturer">讲师课程</s-tabs-item>
        <template slot="opeart">
          设置
        </template>
    </s-tabs-head>
    <s-tabs-body>
        <s-tabs-pane name="video">视频内容</s-tabs-pane>
        <s-tabs-pane name="audio">音频内容</s-tabs-pane>
        <s-tabs-pane name="lecturer">讲师内容</s-tabs-pane>
    </s-tabs-body>
</s-tabs>


data(){
    return {
        selectedTab: 'lecturer'
    }
}
```

