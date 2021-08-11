const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const banner = require("./banner.js");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [path.resolve('./loader/myloader.js')],
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      templateParameters: {
        env: process.env.NODE_ENV === 'development' ? '(개발용)' : '',
      }
    }),
    new webpack.BannerPlugin(banner),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify("v.1.0.0"),
      PRODUCTION: JSON.stringify(false),
      MAX_COUNT: JSON.stringify(999),
      "api.domain": JSON.stringify("http://dev.api.domain.com"),
    })
  ]
}