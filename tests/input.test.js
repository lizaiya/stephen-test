const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'
Vue.config.productionTip = false
Vue.config.devtools = false
//6个测试用例
describe('Input', () => {
    //BDD 行为驱动开发 Mocha  断言使用chai
    it('存在.', () => {
        expect(Input).to.exist;
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(function () {
            vm.$destroy()
        })
        it('接收 value', () => {
            vm = new Constructor({
                propsData: {
                    value: '测试value接收值1'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('测试value接收值1')
        })
        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接收 readonly', () => {
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '输入错误'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMsgElement = vm.$el.querySelector('.errorMsg')
            expect(errorMsgElement.innerText).to.equal('输入错误')
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(function () {
            vm.$destroy()
        })
        it('触发change/input/focus/blur', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName, callback);
                //触发input的change事件
                let event = new Event(eventName);
                //由于自定义event事件没有target属性，
                //添加target属性
                Object.defineProperty(event, 'target', { value: { value: 'hi' }, enumerable: true })
                let inputElement = vm.$el.querySelector('input');
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith('hi');
            })

        })

    })

})