module.exports = {
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_URL]: {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    }
  }
}