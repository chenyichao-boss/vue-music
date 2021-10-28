const registerRouter = require('./backend/router')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/src/assets/scss/variable.scss";
          @import "@/src/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    before(app) {
      registerRouter(app)
    }
  },
  configureWebpack: (config) => {
    if (process.env.npm_config_report) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  },
  // productionSourceMap: false,      //生产环境下使用，不让使用者看到源码
  // publicPath: process.env.NODE_ENV === 'production' ? '/music-next/' : '/'        //子路径的配置

  // entry: {
  //   app: './src/main.js'
  // },
}
