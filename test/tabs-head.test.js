const expect = chai.expect;
import Vue from 'vue'
import TabsHead from '../src/tabs-head'
Vue.config.productionTip = false
Vue.config.devtools = false
//7个测试用例
describe('TabsHead ', () => {
    it('TabsHead 存在', () => {
        expect(TabsHead).to.exist;
    })
})