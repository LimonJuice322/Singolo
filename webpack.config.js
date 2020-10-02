const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

module.exports = {
  entry: __dirname + "/src/js/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {  // where we defined file patterns and their loaders
      rules: [
        {
          test: /\.less$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        },
        {
          test: /\.(png|jpg)$/i,
          use: {
            loader: 'file-loader',
            query: {
              name: 'src/img/[name].[ext]'
            }
          }
        },
        {
          test: /\.svg$/i,
          use: [
            {
              loader: 'file-loader',
              query: {
                name: 'src/img/[name].[ext]'
              }
            },
            {
              loader: 'svgo-loader',
              query: {
                name: 'src/img/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.woff$/i,
          use: {
            loader: 'file-loader',
            query: {
              name: 'src/fonts/[name].[ext]'
            }
          },
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        }
      ]
  },
  plugins: [  // Array of plugins to apply to build chunk
      new HtmlWebpackPlugin({
          template: __dirname + "/index.html",
          inject: 'body'
      }),
      new MiniCssExtractPlugin({
          filename: 'style.css',
      }),
      new ImageminPlugin({
          disable: process.env.NODE_ENV !== 'production',
          pngquant: {
            quality: '95-100'
          },
          optipng: {
            optimizationLevel: 7
          },
          jpegtran: {
            progressive: true
          }
        }),
      new ImageminWebpWebpackPlugin({
        config: [{
          test: /\.(jpg|png)/,
          options: {
            quality:  75
          }
        }]
      })
  ],
  devServer: {  // configuration for webpack-dev-server
      contentBase: './dist',  //source of static assets
      port: 7700, // port to run dev-server
      open: true // Open browser
  }
};
