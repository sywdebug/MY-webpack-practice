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
};
