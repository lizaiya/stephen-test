---
title: Collapse
sidebarDepth: 2
---

# 折叠面板

Collapse

<ClientOnly><collapse-demo></collapse-demo></ClientOnly>

```
    <s-collapse v-model="activeNames" :single="false" @change="handlerChange">
      <s-collapse-item title="标题1" name="1">内容1</s-collapse-item>
      <s-collapse-item title="标题2" name="2">内容2</s-collapse-item>
      <s-collapse-item title="标题3" name="3">内容3</s-collapse-item>
    </s-collapse>
<script>
    export default {
        components:{
            's-collapse':Callapse,
            's-collapse-item':CallapseItem,
        },
        data(){
            return {
            activeNames: ['1']
            }
        },
        methods:{
            handlerChange(val){
            console.log(val);
            }
        }
    }
</script>
```

