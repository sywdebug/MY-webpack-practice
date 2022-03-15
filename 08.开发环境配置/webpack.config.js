const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        //处理样式
        test: /\.(c|s[c,a]|le)ss$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        //处理html的img
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test:/\.(jpg|png|gif)/,
        path
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
  devServer: {
    static: {
      directory: resolve(__dirname, "build"),
    },
    compress: true,
    port: 3000,
    open: true,
  },
};
