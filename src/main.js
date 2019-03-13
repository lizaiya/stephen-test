import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import plugin from './plugin';
Vue.use(plugin)
new Vue({
    render: h => h(App),
}).$mount('#app')
