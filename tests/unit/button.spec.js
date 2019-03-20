import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
import Button from '@/button.vue'
chai.use(sinonChai)
//4个测试用例 2个待测试
describe('Button', () => {
  it('存在', () => {
    expect(Button).to.be.ok;
  })
  it('可以设置icon.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings'
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes()['href']).to.equal('#i-settings')
  })
  it('可以设置loading.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
        loading: true
      }
    })
    const vm = wrapper.vm;
    const useElements = wrapper.find('use')
    expect(useElements.attributes()['href']).to.equal('#i-loading')
  })
  xit('icon 默认的 order 是 1', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
      }
    })
    const vm = wrapper.vm
  })
  xit('设置 iconPosition 可以改变 order', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    })
    const vm = wrapper.vm
  })
  it('点击 button 触发 click 事件', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
      }
    })
    const vm = wrapper.vm
    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called

  })
})
