---
title: Layout布局容器
sidebarDepth: 2
---

# 布局

## 使用方法:

用于布局的容器组件，方便快速搭建页面的基本结构：

s-layout：外层容器。当子元素中包含 s-header 或 s-footer 时，全部子元素会垂直上下排列，否则会水平左右排列。

s-header：顶栏容器。

s-aside：侧边栏容器。

s-main：主要区域容器。

s-footer：底栏容器。

***s-layout的子元素只能是后四者，后四者的父元素也只能是 s-layout***
<ClientOnly>
   <layout-demo></layout-demo>
</ClientOnly>


### 示例代码
```
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
```

