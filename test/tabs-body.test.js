const expect = chai.expect;
import Vue from 'vue'
import TabsBody from '../src/tabs-body'
Vue.config.productionTip = false
Vue.config.devtools = false
//7个测试用例
describe('TabsBody ', () => {
    it('TabsBody 存在', () => {
        expect(TabsBody).to.exist;
    })
})