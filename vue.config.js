const path = require('path')
module.exports = {
 css: {
      loaderOptions: {
        sass: {
          data: `@import "@/scss/index.scss";`
        }
      }
    }
}

