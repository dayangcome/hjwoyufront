const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, 
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://localhost:8888',
        target: 'http://47.236.95.98:8888',
        changeOrigin: true,
        pathRewrite: {            // 是否重写路径，看代理前端路径是否与后端路径一致
          '^/api':'', //将所有含/api路径的，去掉/api转发给服务器                 
        }
      }
    }
  }
})