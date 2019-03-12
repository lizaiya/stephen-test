---
title: Button
sidebarDepth: 2
---

# 按钮
<button-demo></button-demo>
```
    <s-button>默认样式</s-button>
    <s-button icon-position="left" :loading="true">loading</s-button>
    <s-button icon-position="left" icon="settings">icon左</s-button>
    <s-button icon-position="right" icon="settings">icon右</s-button>
    <s-button icon="settings"></s-button>
    <s-button :loading="loading" @click="loading=!loading">切换loading</s-button>
```

## buttonGroup

组合按钮

 <buttonGroup-demo></buttonGroup-demo>

```
 <s-button-group>
      <s-button icon="left">上一页</s-button>
      <s-button icon="left">更多</s-button>
      <s-button icon="right" icon-position="right">下一页</s-button>
  </s-button-group>
```