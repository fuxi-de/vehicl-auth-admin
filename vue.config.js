/* eslint-disable quotes */
module.exports = {
  devServer: {
    proxy: {
      "^/api/": {
        target: "http://localhost:4000",
        logLevel: "debug",
        changeOrigin: true,
        secure:false,
        pathRewrite: { "^/api": "" }
      }
    }
  }
}
