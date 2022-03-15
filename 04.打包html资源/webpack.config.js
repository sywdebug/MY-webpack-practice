const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [],
  },
  plugins: [
    //plugins的配置
    //html-webpack-plugin
    //功能:默认会创建一个空的HTML,自动引入打包输出的所有资源
    // new HtmlWebpackPlugin(),
    //需求:需要有结构的html文件
    new HtmlWebpackPlugin({
      //复制"./src/index.html"文件,并自动引入打包输出的所有资源
      template: "./src/index.html",
    }),
  ],
  mode: "development",
};
