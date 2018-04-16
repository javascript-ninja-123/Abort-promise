const webpack = require('webpack');
const path = require('path');
require('babel-polyfill')

//plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const build = 'build';
const port = 3000;

module.exports = {
    entry:['babel-polyfill','./src/index.js'],
    output: {
    path: path.join(__dirname, build),
    filename: 'bundle.js'
  },
  watch:true,
  devServer: {
  contentBase: path.join(__dirname, build),
  compress: true,
  watchContentBase:true,
  hot:true,
  port
},
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader",'sass-loader']
        })
      },
      {
      test: /\.js$/,
      exclude:[/node_modules/],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([build]),
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({template:"./src/index.html"}),
    new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        files:['./build/*.html'],
        server: { baseDir: [build] }
      })
 ]
}
