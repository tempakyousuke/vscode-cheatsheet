module.exports = {
  chainWebpack: config => {
    config.module
      .rule('json')
      .test(/\.json$/)
      .use('strip-json-comments-loader')
      .loader('strip-json-comments-loader')
      .end()
  }
}