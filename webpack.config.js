const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

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
    new webpack.BannerPlugin({
      banner: () => `빌드 날짜 ${new Date().toLocaleDateString()}`,
    })
  ]
}