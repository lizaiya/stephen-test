import Vue from 'vue';
import plugin from '../src/plugin';
Vue.use(plugin)
const createElm = function(html) {
    const elm = document.createElement('div');
    document.body.appendChild(elm);
    elm.innerHTML = html;
    return elm;
};
/**
 * 创建一个测试组件实例
 * @link http://vuejs.org/guide/unit-testing.html#Writing-Testable-Components
 * @param  {Object}  Compo          - 组件对象
 * @param  {Object}  propsData      - props 数据
 * @param  {Boolean=false} mounted  - 是否添加到 DOM 上
 * @return {Object} vm
 */
export const createTest = function(Compo, propsData = {}, mounted = false) {
    if (propsData === true || propsData === false) {
        mounted = propsData;
        propsData = {};
    }
    const elm = createElm();
    const Ctor = Vue.extend(Compo);
    return new Ctor({ propsData }).$mount(mounted === false ? null : elm);
};
/**
 * 创建一个 Vue 的实例对象
 * @param  {Object|String}  Compo   组件配置，可直接传 template
 * @param  {Boolean=false} mounted 是否添加到 DOM 上
 * @return {Object} vm
 */
export const createVue = function(Compo, mounted = false) {
    if (Object.prototype.toString.call(Compo) === '[object String]') {
        Compo = { template: Compo };
    }
    return new Vue(Compo).$mount(mounted === false ? null : createElm());
};