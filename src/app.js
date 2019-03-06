 import Vue from 'vue';
 import Button from './button';
 import Icon from './icon';
 import ButtonGroup from './button-group';
 import Input from './input';
 import Row from './row';
 import Col from './col';
 Vue.component('s-button', Button)
 Vue.component('s-icon', Icon)
 Vue.component('s-button-group', ButtonGroup)
 Vue.component('s-input', Input)
 Vue.component('s-row', Row)
 Vue.component('s-col', Col)
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
         }
     }
 });