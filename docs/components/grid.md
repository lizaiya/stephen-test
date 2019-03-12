---
title: 栅格基础布局
sidebarDepth: 2
---

# 栅格

## 基础布局

使用单一分栏创建基础的栅格布局。
    <ClientOnly>
    <grid-demo></grid-demo>
    </ClientOnly>


代码示例

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

```
    <s-row  class="row"  align="center">
      <s-col :span="24"><div class="bg-purple-dark">24</div></s-col>
    </s-row>
    <s-row class="row"  align="center">
      <s-col :span="12"><div class="bg-purple">12 </div></s-col>
      <s-col :span="12"><div class="bg-purple-light">12 </div></s-col>
    </s-row>
    <s-row class="row"  align="center">
      <s-col :span="8"><div class="bg-purple">8 </div></s-col>
      <s-col :span="8"><div class="bg-purple-light">8 </div></s-col>
      <s-col :span="8"><div class="bg-purple">8 </div></s-col>
    </s-row>
    <s-row class="row"  align="center">
      <s-col :span="6"><div class="bg-purple">6 </div></s-col>
      <s-col :span="6"><div class="bg-purple-light">6 </div></s-col>
      <s-col :span="6"><div class="bg-purple">6 </div></s-col>
      <s-col :span="6"><div class="bg-purple-light">6 </div></s-col>
    </s-row>
    <s-row class="row"  align="center">
      <s-col :span="4"><div class="bg-purple">4 </div></s-col>
      <s-col :span="4"><div class="bg-purple-light">4 </div></s-col>
      <s-col :span="4"><div class="bg-purple">4 </div></s-col>
      <s-col :span="4"><div class="bg-purple-light">4 </div></s-col>
      <s-col :span="4"><div class="bg-purple">4 </div></s-col>
      <s-col :span="4"><div class="bg-purple-light">4 </div></s-col>
    </s-row>
```

## 分栏间隔

分栏之间存在间隔
    <ClientOnly>
        <grid-gutter-demo></grid-gutter-demo>
    </ClientOnly>



间隔代码示例

Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。

```
  <s-row class="row" :gutter="20" align="center">
    <s-col :span="6"><div class="bg-purple">6 </div></s-col>
    <s-col :span="6"><div class="bg-purple">6 </div></s-col>
    <s-col :span="6"><div class="bg-purple">6 </div></s-col>
    <s-col :span="6"><div class="bg-purple">6 </div></s-col>
  </s-row>
```

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<ClientOnly>
    <grid-mix-demo></grid-mix-demo>
</ClientOnly>


混合布局代码示例

```
    <s-row class="row" align="center">
      <s-col :span="1"><div class="bg-purple-dark">1 </div></s-col>
      <s-col :span="6"><div class="bg-purple">6 </div></s-col>
      <s-col :span="9"><div class="bg-purple-dark">9 </div></s-col>
      <s-col :span="8"><div class="bg-purple">8 </div></s-col>
    </s-row>
    <s-row class="row" align="center">
      <s-col :span="4"><div class="bg-purple-dark">4 </div></s-col>
      <s-col :span="8"><div class="bg-purple">8 </div></s-col>
      <s-col :span="8"><div class="bg-purple-dark">8 </div></s-col>
      <s-col :span="4"><div class="bg-purple">4 </div></s-col>
    </s-row>
    <s-row class="row" align="center">
      <s-col :span="2"><div class="bg-purple-dark">2 </div></s-col>
      <s-col :span="10"><div class="bg-purple">10 </div></s-col>
      <s-col :span="3"><div class="bg-purple-dark">3 </div></s-col>
      <s-col :span="9"><div class="bg-purple">9 </div></s-col>
    </s-row>
```

## 分栏布局

通过设置Col组件的 offset属性 支持偏移指定的栏数。
<ClientOnly>
    <grid-offset-demo></grid-offset-demo>
</ClientOnly>


分栏布局 代码示例

```
    <s-row class="row" align="center">
      <s-col :span="8"><div class="bg-purple-dark">8</div></s-col>
      <s-col :span="6" offset="2"><div class="bg-purple-dark">6</div> </s-col>
      <s-col :span="4" offset="4"><div class="bg-purple-dark">4</div></s-col>
    </s-row>
    <s-row class="row" align="center">
      <s-col :span="2" offset="4"><div class="bg-purple-dark">2</div></s-col>
      <s-col :span="5" offset="5"><div class="bg-purple-dark">5</div></s-col>
      <s-col :span="4" offset="4"><div class="bg-purple-dark">4</div></s-col>
    </s-row>

```

## 响应式布局

通预设了4个响应式尺寸 (默认移动优先)
ipad 577px~768px
narrowPc 769px~992px
pc  993px~1200px
widePc 1201px及以上

<ClientOnly>
    <grid-res-demo></grid-res-demo>
</ClientOnly>


响应式布局 代码示例

```
  <s-row class="row" align="center">
    <s-col :span="24" :ipad="{span:17,offset:1}" :narrow-pc="{span:14}" :pc="{span:8}" :wide-pc="{span:4}"></s-col>
    <s-col :span="24" :ipad="{span:6}" :narrow-pc="{span:5,offset:3}" :pc="{span:16}" :wide-pc="{span:20}"></s-col>
  </s-row>
```

## Row组件 属性
参数 | 说明 |   类型   |   可选值    | 默认值
--|:--:|:--:|:--:|--:
gutter|栅格间隔 |Number, String|-|0
align |对齐方式| String|left, right,center|left

## Col组件 属性
参数 | 说明 |   类型   |   可选值    | 默认值
--|:--:|:--:|:--:|--:
span|栅格间隔 |Number, String|-|0
offset |对齐方式| Number, String|-|0
ipad |<768px| Objec({span:4,offset:4})|-|-
narrow-pc |≥768px| Objec({span:4,offset:4})|-|-
pc |≥992px| Objec({span:4,offset:4})|-|-
wide-pc |≥1200px| Objec({span:4,offset:4})|-|-








