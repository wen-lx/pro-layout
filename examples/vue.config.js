const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const vueConfig = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@element-ui-vue/pro-layout', resolve('../src'))
  },
  devServer: {
    port: 8898,
    open: true
  },
  productionSourceMap: false
  // lintOnSave: false
}

module.exports =  vueConfig