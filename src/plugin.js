export default {
    install(Vue, options) {
        Vue.prototype.$toast = function() {
            console.log(123)
        }
    }
}