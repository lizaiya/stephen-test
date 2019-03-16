
// export default {
//     bind: function (el, binding, vnode) {
//        document.addEventListener('click', function (e) {
//             let { target } = e;
//             if (target === el || el.contains(target)) return;
//             binding.value();
//         })
//     }
// }
//优化
let callbacks = []
let onClickDoc = (e) => {
    let { target } = e;
    callbacks.forEach((item) => {
        if (target === item.el || item.el.contains(target)) return
        item.callback()
    })
}
//页面上使用一百次指令，避免重复监听
document.addEventListener('click', onClickDoc)
export default {
    bind: function (el, binding) {
        callbacks.push({ el, callback: binding.value })
    }
}
