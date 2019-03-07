 import Vue from 'vue';
 import Button from './button';
 import Icon from './icon';
 import ButtonGroup from './button-group';
 import Input from './input';
 import Row from './row';
 import Col from './col';
 import Layout from './layout';
 import Header from './header';
 import Main from './main';
 import Footer from './footer';
 import Aisde from './aside';
 import Tabs from './tabs';
 import TabsHead from './tabs-head';
 import TabsBody from './tabs-body';
 import TabsPane from './tabs-pane';
 import TabsItem from './tabs-item';


 import plugin from './plugin';
 Vue.component('s-button', Button)
 Vue.component('s-icon', Icon)
 Vue.component('s-button-group', ButtonGroup)
 Vue.component('s-input', Input)
 Vue.component('s-row', Row)
 Vue.component('s-col', Col)
 Vue.component('s-layout', Layout)
 Vue.component('s-header', Header)
 Vue.component('s-main', Main)
 Vue.component('s-footer', Footer)
 Vue.component('s-aside', Aisde)
 Vue.component('s-tabs', Tabs)
 Vue.component('s-tabs-head', TabsHead)
 Vue.component('s-tabs-body', TabsBody)
 Vue.component('s-tabs-pane', TabsPane)
 Vue.component('s-tabs-item', TabsItem)

 import TestTabs from './test-tabs/tabs';
 //  import TabsHead from './test-tabs/tabs-head';
 //  import TabsBody from './test-tabs/tabs-body';
 import TestTabsPane from './test-tabs/tabs-pane';
 //  import TabsItem from './test-tabs/tabs-item';
 Vue.component('s-test-tabs', TestTabs)
 Vue.component('s-test-tabs-pane', TestTabsPane)
 Vue.use(plugin)

 new Vue({
     el: '#app',
     data: {
         selectedTab: 'audio',
         loading1: false,
         loading2: false,
         loading3: false,
         message: '双向绑定'
     },

     methods: {
         inputChange(value) {
             console.log('inputChange事件', value)
         },
         inputEvent(value) {
             console.log('input事件', value)
         },
         showToast() {
             this.$toast(`toast弹窗toast弹窗toast弹窗toast弹窗toast弹窗toast弹窗toast弹窗`, {
                 autoClose: false,
                 enableHtml: false,
                 position: 'top',
                 closeButton: {
                     text: '关闭了',
                     callback: () => {
                         console.log('按钮关闭的');
                     }
                 },
             });
         }
     },


 });