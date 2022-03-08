module.exports = {
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 7100,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
