import Toast from './toast'
let currentToast;
export default {
    install(Vue, options) {
        Vue.prototype.$bus = new Vue();
        Vue.prototype.$toast = function(msg, propsData) {
            if (currentToast) {
                currentToast.close();
            }
            currentToast = createdToast({
                Vue,
                msg,
                propsData,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}










function createdToast({ Vue, msg, propsData, onClose }) {
    //构造函数
    let constructor = Vue.extend(Toast)
    //toast 实例
    let toast = new constructor({ propsData })
    toast.$slots.default = [msg];
    //挂载
    toast.$mount()
    toast.$on('close', onClose)
    //添加到body
    document.body.appendChild(toast.$el);
    return toast;
}