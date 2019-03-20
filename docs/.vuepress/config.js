const path = require('path')

module.exports = {
    base: '/stephen-test/',
    title: 'Stephen-ui',
    description: '一个好用的框架',

    themeConfig: {
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/layout',
                    '/components/grid',
                    '/components/button',
                    '/components/input',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse',
                    '/components/tabs',
                ]
            },


        ]
    },
    chainWebpack: (config, isServer) => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))

    },
    scss: {
        javascriptEnabled: true
    }
}
function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, '../../src/styles/index.scss'), // 需要全局导入的less
                // path.resolve(__dirname, '../../src/styles/mixin.less'),
            ],
        })
}
