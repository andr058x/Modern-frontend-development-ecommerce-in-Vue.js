// Configuration reference: https://cli.vuejs.org/config/#vue-config-js

const webpack = require("webpack");

module.exports = {
  publicPath: "/",
  devServer: {
    port: 990,
    https: false
  },
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      new webpack.ProvidePlugin({
      })
    ]
  }
};
