const expect = chai.expect;
import Vue from 'vue'
import TabsPane from '../src/tabs-pane'
Vue.config.productionTip = false
Vue.config.devtools = false
//7个测试用例
describe('TabsPane ', () => {
    it('TabsPane 存在', () => {
        expect(TabsPane).to.exist;
    })
})