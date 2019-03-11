const expect = chai.expect;
import { createVue, destroyVM } from './util';
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

Vue.component('s-collapse', Collapse)
Vue.component('s-collapse-item', CollapseItem)

Vue.config.productionTip = false
Vue.config.devtools = false
//3个测试用例 tabs tabs-item
describe('Tabs ', () => {
    let vm;
    afterEach(function () {
        destroyVM(vm);
    })
    it('Collapse 存在', () => {
        expect(Collapse).to.exist;
    })
    it('接受activeNames 属性', (done) => {
        vm = createVue({
            template: `<s-collapse v-model="activeNames" @change="handleChange">
                            <s-collapse-item title="音频标题" name="1" >
                                <span id="content-1">音频内容</span>
                            </s-collapse-item>
                            <s-collapse-item title="视频标题" name="2" data-name="2">
                                <span id="content-2">视频内容</span>
                            </s-collapse-item>
                            <s-collapse-item title="代理商标题" name="3">
                                <span id="content-3">代理商内容</span>
                            </s-collapse-item>
                            <s-collapse-item title="讲师标题" name="4">
                                <span id="content-4">讲师内容</span>
                            </s-collapse-item>
                        </s-collapse>`,
            data () {
                return {
                    activeNames: ['1']
                }
            },
            methods: {
                handleChange (val) {
                    console.log(val);
                }
            }
        }, true);
        vm.$nextTick(() => {
            expect(vm.$el.querySelector('#content-1')).to.exist;
            expect(vm.$el.querySelector('#content-2')).to.not.exist;
            expect(vm.$el.querySelector('#content-3')).to.not.exist;
            expect(vm.$el.querySelector('#content-4')).to.not.exist;
            done();
        })
    })
    it('接受siggle属性/触发change事件', (done) => {
        const callback = sinon.fake();
        vm = createVue({
            template: `<s-collapse v-model="activeNames" @change="handleChange" single>
                            <s-collapse-item title="音频标题" name="1" >
                                <span id="content-1">音频内容</span>
                            </s-collapse-item>
                            <s-collapse-item title="视频标题" name="2" data-name="2">
                                <span id="content-2">视频内容</span>
                            </s-collapse-item>
                            <s-collapse-item title="代理商标题" name="3">
                                <span id="content-3">代理商内容</span>
                            </s-collapse-item>
                            <s-collapse-item title="讲师标题" name="4">
                                <span id="content-4">讲师内容</span>
                            </s-collapse-item>
                        </s-collapse>`,
            data () {
                return {
                    activeNames: ['1']
                }
            },
            methods: {
                handleChange: callback
            }
        }, true);

        vm.$nextTick(() => {
            vm.$el.querySelector('[data-name="2"]').click();
            setTimeout(() => {
                expect(vm.$el.querySelector('#content-1')).to.not.exist;
                expect(vm.$el.querySelector('#content-2')).to.exist;
                expect(callback).to.have.been.called;
            });
            done();
        })
    })

})