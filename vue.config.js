const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir); // path.join()方法会将所有给定的 path 片段连接到一起，然后规范化生成的路径。
}

module.exports = {

  // lintOnSave 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  lintOnSave: process.env.NODE_ENV === 'development',

  devServer: {
    open: true, // 浏览器自动打开页面
    host: '0.0.0.0',
    port: 4570,
    https: false,
    hot: true,
    hotOnly: false
  },

  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src'));
  }
};
