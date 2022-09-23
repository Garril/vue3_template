// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//   transpileDependencies: true
// });
const path = require('path') // eslint得配置rules: '@typescript-eslint/no-unused-vars': 'off' 不然报错

module.exports = {
  outputDir: './build', // 打包后文件名
  publicPath: './', // 应用部署后，域名后加的path
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        router: '@/router',
        store: '@/store',
        views: '@/views'
      }
    }
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080
  }
}
