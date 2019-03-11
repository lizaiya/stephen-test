const expect = chai.expect;
import { createVue, destroyVM } from './util';
import Vue from 'vue'
import Popover from '../src/popover'
import Button from '../src/button'
Vue.component('s-popover', Popover)
Vue.component('s-button', Button)


Vue.config.productionTip = false
Vue.config.devtools = false
//3个测试用例
describe('Popover ', () => {
    let vm;
    afterEach(function () {
        destroyVM(vm);
    })
    it('Popover 存在', () => {
        expect(Popover).to.exist;
    })
    it('接受position 属性', (done) => {
        vm = createVue({
            template: `<s-popover position="bottom" ref="a" >
                            <div slot="content" >
                                内容内容内容内容内内容内容内容内容内内容内容内容内容内内容内容内容内容
                                内内容内容内容内容内内容内容内容内容内内容内容内容内容内内容内容内容内
                                容内内容内容内容内容内内容内容内容内容内
                            </div>
                            <s-button>popover组件</s-button>
                       </s-popover>`
        }, true);
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            let { contentWrapper } = vm.$refs.a.$refs;
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true;
            done();
        })
    })
    it('接收trigger 属性', (done) => {
        vm = createVue({
            template: `<s-popover position="bottom" ref="a" trigger="hover">
                            <div slot="content">
                                内容内容内容内容内内容内容内容内容内内容内容内容内容内内容内容内容内容
                                内内容内容内容内容内内容内容内容内容内内容内容内容内容内内容内容内容内
                                容内内容内容内容内容内内容内容内容内容内
                            </div>
                            <s-button>popover组件</s-button>
                       </s-popover>`
        }, true);

        let event = new Event('mouseenter');
        vm.$el.dispatchEvent(event)
        vm.$nextTick(() => {
            let { contentWrapper } = vm.$refs.a.$refs;
            //    console.log(vm.$refs.a.$refs.contentWrapper)
            expect(contentWrapper).to.exist
            done();
        })
    })


})