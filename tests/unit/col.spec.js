import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Col from '@/col'

//7个测试用例
describe('Col ', () => {
    it('Col 存在', () => {
        expect(Col).to.be.ok;
    })
    it('接收 span 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                span: 10
            }
        })
        expect(wrapper.classes('col-10')).to.be.true;
    })
    it('接收 offset 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                offset: 10
            }
        })
        expect(wrapper.classes('offset-10')).to.be.true;
    })
    it('接收 ipad 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                ipad: { span: 10, offset: 10 }
            }
        })
        expect(wrapper.classes('col-ipad-10')).to.be.true;
        expect(wrapper.classes('offset-ipad-10')).to.be.true;
    })
    it('接收 narrow-pc 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                narrowPc: { span: 10, offset: 10 }
            }
        })
        expect(wrapper.classes('col-narrow-pc-10')).to.be.true;
        expect(wrapper.classes('offset-narrow-pc-10')).to.be.true;

    })
    it('接收 pc 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                pc: { span: 10, offset: 10 }
            }
        })
        expect(wrapper.classes('col-pc-10')).to.be.true;
        expect(wrapper.classes('offset-pc-10')).to.be.true;
    })
    it('接收 wide-pc 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                widePc: { span: 10, offset: 10 }
            }
        })
        expect(wrapper.classes('col-wide-pc-10')).to.be.true;
        expect(wrapper.classes('offset-wide-pc-10')).to.be.true;
    })
})