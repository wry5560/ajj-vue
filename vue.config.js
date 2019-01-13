const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/asrsajj/AS_SYSTEM/newHome/'
    : '/',
  /*
    Vue-cli3:
    Crashed when using Webpack `import()` #2463
    https://github.com/vuejs/vue-cli/issues/2463

   */
  /*
  pages: {
    index: {
      entry: 'src/main.js',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  */
  configureWebpack: {

  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@layout', resolve('src/layout'))
      .set('@static', resolve('src/static'))
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */

          /*
          'primary-color': '#F5222D',
          'link-color': '#F5222D',
          'border-radius-base': '4px',
          */
        },
        javascriptEnabled: true,
      }
    }
  },

  devServer: {
    proxy: {
      '/api': {
        // target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
        // target: 'https://www.easy-mock.com/mock/5b7bce071f130e5b7fe8cd7d/antd-pro',
        // target: 'https://www.easy-mock.com/mock/5c1134372a95a012b1c7497d',
        target: 'http://feooe.myds.me:6200',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/asrsajj'
        }
      },
      '/gateway': {
        target: 'https://www.easy-mock.com/mock/5c1134372a95a012b1c7497d',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/gateway': '/api'
        }
      }
    }
  },

  lintOnSave: undefined
}