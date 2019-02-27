 import Vue from 'vue';
 import Button from './button';
 import Icon from './icon';
 import ButtonGroup from './button-group';
 Vue.component('s-button', Button)
 Vue.component('s-icon', Icon)
 Vue.component('s-button-group', ButtonGroup)

 new Vue({
     el: '#app',
     data: {
         loading1: false,
         loading2: false,
         loading3: false,
     }

 });
 import chai from 'chai';
 const expect = chai.expect;
 import spies from 'chai-spies';
 chai.use(spies);
 //单元测试
 {

     //创建模板
     const Constructor = Vue.extend(Button);
     //实例化
     const vm = new Constructor({
         propsData: {
             icon: 'settings'
         }
     });
     //挂载到test节点下
     vm.$mount();
     let useElement = vm.$el.querySelector('use');
     let href = useElement.getAttribute('xlink:href')
     expect(href).to.equal('#i-settings')
     vm.$el.remove();
     vm.$destroy();
 } {
     const Constructor = Vue.extend(Button);
     const vm = new Constructor({
         propsData: {
             icon: 'settings',
             loading: true
         }
     });
     vm.$mount();
     let useElement = vm.$el.querySelector('use');
     let href = useElement.getAttribute('xlink:href')
     expect(href).to.equal('#i-loading')
     vm.$el.remove();
     vm.$destroy();
 } {
     const div = document.createElement('div');
     document.body.appendChild(div);
     const Constructor = Vue.extend(Button);
     const vm = new Constructor({
         propsData: {
             icon: 'settings'
         }
     });
     vm.$mount(div);
     let svg = vm.$el.querySelector('svg');
     //获取svg的计算属性
     let { order } = window.getComputedStyle(svg);
     expect(order).to.equal('1')
     vm.$el.remove();
     vm.$destroy();
 } {
     const div = document.createElement('div');
     document.body.appendChild(div);
     const Constructor = Vue.extend(Button);
     const vm = new Constructor({
         propsData: {
             icon: 'settings',
             iconPosition: 'left'
         }
     });
     vm.$mount(div);
     let svg = vm.$el.querySelector('svg');
     //获取svg的计算属性
     let { order } = window.getComputedStyle(svg);
     expect(order).to.equal('1')
     vm.$el.remove();
     vm.$destroy();
 } {
     const div = document.createElement('div');
     document.body.appendChild(div);
     const Constructor = Vue.extend(Button);
     const vm = new Constructor({
         propsData: {
             icon: 'settings',
             iconPosition: 'right'
         }
     });
     vm.$mount(div);
     let svg = vm.$el.querySelector('svg');
     //获取svg的计算属性
     let { order } = window.getComputedStyle(svg);
     expect(order).to.equal('2')
     vm.$el.remove();
     vm.$destroy();
 } {
     //mock
     const Constructor = Vue.extend(Button);
     const vm = new Constructor({
         propsData: {
             icon: 'settings',
             iconPosition: 'right'
         }
     });
     vm.$mount();
     //间谍函数
     let spy = chai.spy(function() {});
     vm.$on('click', spy);
     let button = vm.$el;
     button.click();
     //期待间谍函数被调用
     expect(spy).to.have.been.called();
 }