import chai, { expect } from 'chai'
import { createVue, destroyVM } from '../util';
import Vue from 'vue'
import sinon from 'sinon'
import { shallowMount, mount } from '@vue/test-utils'
import Collapse from '@/collapse'
import CollapseItem from '@/collapse-item'
Vue.component('s-collapse', Collapse)
Vue.component('s-collapse-item', CollapseItem)
//3个测试用例 1个待测试
describe('Tabs ', () => {
    it('Collapse 存在', () => {
        expect(Collapse).to.exist;
    })
    it('接受activeNames 属性', (done) => {
        const wrapper = mount({
            data () {
                return {
                    activeNames: ['1']
                }
            },
            methods: {
                handleChange (val) {
                    console.log(val);
                }
            },
            template: `
                <s-collapse v-model="activeNames" @change="handleChange">
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
                </s-collapse>
            `
        })
        let vm = wrapper.vm
        vm.$nextTick(() => {
            expect(vm.$el.querySelector('#content-1')).to.exist;
            expect(vm.$el.querySelector('#content-2')).to.not.exist;
            expect(vm.$el.querySelector('#content-3')).to.not.exist;
            expect(vm.$el.querySelector('#content-4')).to.not.exist;
            done();
        })
    })
    xit('接受siggle属性/触发change事件', (done) => {
        const wrapper = mount({
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
            }
        }, true);
    })
})


