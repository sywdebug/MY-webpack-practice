const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(c|s[c,a]|le)ss$/,
        use: [
          "style-loader",
          "css-loader",
          //将less文件编译成css文件
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",

  //开发服务器devServer:用来自动化(自动编译,自动打开浏览器,自动刷新浏览器)
  //特点:只会在内存中编译打包,不会有任何输出
  //启动devServer指令为:npx webpack-dev-server
  devServer: {
    static: {
      directory: resolve(__dirname, "build"),
    },
    //启用gzip压缩
    compress: true,
    //端口号
    port: 3000,
    //自动打开浏览器
    open: true,
  },
};
