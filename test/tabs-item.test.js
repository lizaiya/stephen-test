const expect = chai.expect;
import { createTest } from './util';
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
Vue.component('s-tabs', Tabs)
Vue.component('s-tabs-head', TabsHead)
Vue.component('s-tabs-body', TabsBody)
Vue.component('s-tabs-item', TabsItem)
Vue.component('s-tabs-pane', TabsPane)
Vue.config.productionTip = false
Vue.config.devtools = false
//7个测试用例
describe('TabsItem ', () => {
    it('TabsItem 存在', () => {
        expect(TabsItem).to.exist;
    })


})