---
title: input
sidebarDepth: 2
---

# input

<ClientOnly><input-demo></input-demo></ClientOnly>
```
    <s-input placeholder="禁用" value="张三" disabled></s-input>
    <s-input placeholder="只读" value="张三" :readonly="true"></s-input>
    <s-input placeholder="error样式" value="李四" error="姓名不能少于两个字"></s-input>
    <p>
      <s-input placeholder="change事件" value="王五" @changes="inputChange" v-model="message"></s-input>
    </p>
```

## Input Events
事件名称 | 说明 |   回调
--|:--:|:--:
change|在 Input 值改变时触发 | (value)
focus|在 Input 获得焦点时触发| (value)
blur| 在 Input 失去焦点时触发| (value)
