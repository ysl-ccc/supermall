module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/asset',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
