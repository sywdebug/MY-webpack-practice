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
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpg|png|gif)$/,
        // webpack5中使用assets-module（url-loader已废弃）
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: "img/[hash][ext]",
        },
      },
      {
        test: /\.html$/,
        //处理html文件的img图片(负责引入img,从而能被url-loader进行处理)
        loader: "html-loader",
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
