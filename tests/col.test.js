const expect = chai.expect;
import Vue from 'vue'

import Col from '../src/col'
Vue.config.productionTip = false
Vue.config.devtools = false
//7个测试用例
describe('Col ', () => {
    const div = document.createElement('div');
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col);
    it('Col 存在', () => {
        expect(Col).to.be.ok;
    })
    it('接收 span 属性', () => {
        const vm = new Constructor({
            propsData: {
                span: 10
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-10')).to.eq(true);
        vm.$destroy();
    })
    it('接收 offset 属性', () => {
        const vm = new Constructor({
            propsData: {
                offset: 10
            }
        }).$mount(div)

        expect(vm.$el.classList.contains('offset-10')).to.eq(true);
        vm.$destroy();
    })
    it('接收 ipad 属性', () => {
        const vm = new Constructor({
            propsData: {
                ipad: { span: 10, offset: 10 }
            }
        }).$mount(div)

        expect(vm.$el.classList.contains('col-ipad-10')).to.eq(true);
        expect(vm.$el.classList.contains('offset-ipad-10')).to.eq(true);
        div.remove();
        vm.$destroy();
    })
    it('接收 narrow-pc 属性', () => {
        const vm = new Constructor({
            propsData: {
                narrowPc: { span: 10, offset: 10 }
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-narrow-pc-10')).to.eq(true);
        expect(vm.$el.classList.contains('offset-narrow-pc-10')).to.eq(true);
        div.remove();
        vm.$destroy();
    })
    it('接收 pc 属性', () => {
        const vm = new Constructor({
            propsData: {
                pc: { span: 10, offset: 10 }
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-pc-10')).to.eq(true);
        expect(vm.$el.classList.contains('offset-pc-10')).to.eq(true);
        div.remove();
        vm.$destroy();
    })
    it('接收 wide-pc 属性', () => {
        const vm = new Constructor({
            propsData: {
                widePc: { span: 10, offset: 10 }
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-wide-pc-10')).to.eq(true);
        expect(vm.$el.classList.contains('offset-wide-pc-10')).to.eq(true);
        div.remove();
        vm.$destroy();
    })
})