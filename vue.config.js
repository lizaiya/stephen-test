const path = require('path')
module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
 css: {
      loaderOptions: {
        sass: {
          data: `@import "@/scss/index.scss";`
        }
      }
    }
}

