/**
 * 作用:只是webpack干哪些活
 */
const { resolve } = require("path");
module.exports = {
  //webpack的配置
  //入口
  entry: "./src/index.js",
  //输出
  output: {
    filename: "built.js",
    //__dirname nodejs的变量,代表当前文件的目录的绝对路径
    path: resolve(__dirname, "build"),
  },
  //loader的配置
  module: {
    rules: [
      //详细loader的配置
      // {
      //   //匹配哪些文件
      //   test: /\.css$/,
      //   //使用哪些loader进行处理
      //   use: [
      //     //use数组中loader执行顺序:从右到左,从下到上,依次执行
      //     //创建style标签,将js中的样式资源插入进行,添加到head中生效
      //     "style-loader",
      //     //将css文件编程commonjs模块加载js中,里面内容使样式字符串
      //     "css-loader",
      //   ],
      // },
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
  //plugins的配置
  // pulgins: [
  //   //详细的plugins配置
  // ],
  mode: "development", //开发模式
  // mode:"production",
};
