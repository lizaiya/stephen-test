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
 Vue.use(plugin)
 new Vue({
     el: '#app',
     data: {
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
             this.$toast('toast弹窗', {
                 autoClose: 1000,
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