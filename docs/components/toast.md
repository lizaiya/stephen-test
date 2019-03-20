---
title: Toast
sidebarDepth: 2
---

# 消息提示
<ClientOnly><toast-demo></toast-demo></ClientOnly>
使用方法

```
 <s-button @click="showToast">弹窗toast</s-button>

 methods:{
    showToast(){
       this.$toast(`<p>toast弹窗toast弹窗toast弹窗toast</p>`, {
            autoClose: false,
            enableHtml: true,
            position: 'top',
            closeButton:{text:'按钮关闭',callback:()=>{
                console.log('点击关闭');
            }}
        });
    }
  }
```
## options

参数 | 说明 | 类型|可选值|默认值
--|:--:|:--:|:--:|:--:
autoClose|是否自动关闭 | boolean/Number|false或毫秒数|3000
enableHtml|是否渲染为html|Boolean|Boolean|false
position| toast显示位置| String|top/middle/bottom|top
closeButton|是否显示按钮和回调|Object|{text:'',callback:()=>{}}|

