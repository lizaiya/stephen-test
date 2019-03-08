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
    let vm
    it('TabsItem 存在', () => {
        expect(TabsItem).to.exist;
    })
    it('可以接受disabled、name属性', (done) => {

        // vm = createVue({
        //     template: `
        //         <s-tabs :selected="selectTab" ref="stab">
        //             <s-tabs-head>
        //                 <s-tabs-item name="video" disabled>视频课程</s-tabs-item>
        //                 <s-tabs-item name="audio">音频课程</s-tabs-item>
        //                 <s-tabs-item name="lecturer">讲师课程</s-tabs-item>
        //                 <template slot="opeart">
        //                     设置
        //                 </template>
        //             </s-tabs-head>
        //             <s-tabs-body>
        //                 <s-tabs-pane name="video">视频内容</s-tabs-pane>
        //                 <s-tabs-pane name="audio">音频内容</s-tabs-pane>
        //                 <s-tabs-pane name="lecturer">讲师内容</s-tabs-pane>
        //             </s-tabs-body>
        //         </s-tabs>
        //         `,
        //     data() {
        //         return {
        //             selectTab: 'audio'
        //         }
        //     }
        // }, true);
        // vm.$refs.stab.$nextTick(_ => {
        //     let el = vm.$el.querySelector(`.tabs-item[data-name=${vm.selectTab}]`);
        //     expect(el.classList.contains('active')).to.be.true;
        //     done();
        // })



    });

})