const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'
Vue.config.productionTip = false
Vue.config.devtools = false
//3个测试用例
describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok;
    })
    //done 异步代码  手动调用结束
    it('接收 gutter 属性', (done) => {
        Vue.component('s-row', Row)
        Vue.component('s-col', Col)
        const div = document.createElement('div');
        document.body.appendChild(div)
        div.innerHTML = `
            <s-row gutter="20">
                <s-col span="20" > </s-col>
                <s-col span="20"></s-col>
            </s-row>
        `;
        const vm = new Vue({ el: div })
        setTimeout(() => {
            const row = vm.$el.querySelector('.row');
            expect(getComputedStyle(row).marginRight).to.eq('-10px');
            expect(getComputedStyle(row).marginLeft).to.eq('-10px');
            const cols = vm.$el.querySelectorAll('.col');
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px');
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px');
            done()
        }, 0)
    })
    it('接收 aligns 属性', () => {
        [{ attr: 'left', result: 'flex-start' }, { attr: 'right', result: 'flex-end' }, { attr: 'center', result: 'center' }].forEach(muster => {
            const div = document.createElement('div');
            document.body.appendChild(div);
            const Constructor = Vue.extend(Row);
            const vm = new Constructor({
                propsData: {
                    aligns: muster.attr
                }
            }).$mount(div)
            const el = vm.$el;
            expect(getComputedStyle(el).justifyContent).to.equal(muster.result);
            vm.$destroy();
        });
    })

})