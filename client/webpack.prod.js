const common = require('./webpack.common')
const merge = require('webpack-merge')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');


    module.exports = merge(common, {
      mode: 'production',
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
            ],
          },
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css'
        }),
      ],
      optimization: {
        minimizer: [
          new TerserPlugin({
          // Use multi-process parallel running to improve the build speed
          // Default number of concurrent runs: os.cpus().length - 1
          parallel: true,
          // Enable file caching
          cache: true,
          sourceMap: true,
          })
        ]
       }
    })