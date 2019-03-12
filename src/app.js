import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';
import Layout from './layout';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Aisde from './aside';
import Tabs from './tabs';
import TabsHead from './tabs-head';
import TabsBody from './tabs-body';
import TabsPane from './tabs-pane';
import TabsItem from './tabs-item';
import Popover from './popover';
import Collapse from './collapse';
import CollapseItem from './collapse-item';



import plugin from './plugin';
Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-input', Input)
Vue.component('s-row', Row)
Vue.component('s-col', Col)
Vue.component('s-layout', Layout)
Vue.component('s-header', Header)
Vue.component('s-main', Main)
Vue.component('s-footer', Footer)
Vue.component('s-aside', Aisde)
Vue.component('s-tabs', Tabs)
Vue.component('s-tabs-head', TabsHead)
Vue.component('s-tabs-body', TabsBody)
Vue.component('s-tabs-pane', TabsPane)
Vue.component('s-tabs-item', TabsItem)
Vue.component('s-popover', Popover)
Vue.component('s-collapse', Collapse)
Vue.component('s-collapse-item', CollapseItem)

Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        message: 1,
        activeNames: ['1']

    },
    methods: {
        handleChange (val) {
            console.log('%c this is colored', 'color:red', `出发change事件${val}`)
        },
        inputChange (val) {
            console.log('111')
        },
        focus1 () {

        }
    }


});