const { join } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",//表识开发环境
  devtool: 'source-map',
  entry: "./src/index.tsx", // 入口文件
  output: { // 打包后输出目录
      // 输出目录
      path: join(__dirname, "dist"),
      // 文件名称
      filename: "[name].bundle.js"
  },
  resolve: { extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'] },
  module:{
    rules: [
      { test: /\.t(sx|s)?$/,
        exclude: /node_modules/,
        loader: 'ts-loader' },
      {
        test: /\.(le|c)ss$/,
        exclude: /node_modules/,
				use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
				],
			},
      {
        test: /\.less$/,
        include: /node_modules/,
				use: [
          "style-loader",
          "css-loader",
          'postcss-loader',
					{
            loader: "less-loader",
            options: {
                lessOptions: {
                    javascriptEnabled: true,
                }
            }
          }
				],
			},
    ]
  }, // loader配置
  plugins:[
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      template: join(__dirname, 'index.html')
    }),
  ],// 插件配置
  devServer:{}//开发服务
}