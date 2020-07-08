const path = require('path');
const VueloaderPlugin = require("vue-loader/lib/plugin");
const HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    // 输出文件名，可以写入目录层级在里面。这里使用[name]，是为了打包的时候，生成的名称根据打包模块自动适应名字。
    filename: "static/js/[name].js", 
    publicPath: "./" // 输出的文件是会自动注入到 index.html 里面的，此处的作用是：在注入时，src 的最前方的一截内容。
  },
  // output: {
  //   path: '/',
  //   filename: '[name].js',
  //   publicPath: '/'
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },{
        // 处理 js 文件， vue 文件里 script 节点的js内容也会被这里处理
            test: /\.js$/,
            loader: 'babel-loader',
        },{
        // 处理 css 文件， vue 文件里 style 节点的样式内容也会被这里处理
            test: /\.css$/,
            loader: [
                'vue-style-loader',
                'css-loader'
            ]
        },{
        // 处理json文件
            test: /\.json$/,
            loader: 'json-loader'
        },{
        // 处理资源文件
            test: /\.(png|jpe?g|gif|svg)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: 'static/img/[name]_[hash:7].[ext]'
            }
        }
    ]
  },
  devServer: {
    open: true,
    port: 8099,
    hot: true,
    host: "me.classba.cn"
  },
  // webpack在编译打包时，要处理那些文件：
  resolve: {
    extensions: [".js", ".vue", ".json"] // 三种基本的必须要加入噻， vue单页面组件， 所以vue后缀文件必不可少了。
  },
  // vueloader插件
  plugins: [
    new VueloaderPlugin(),
    new HtmlwebpackPlugin({ // 将 index.html 也打包到输出中。
      filename: 'index.html',
      template: path.join(__dirname, '../index.html'),
      inject: true
    })
  ]
}