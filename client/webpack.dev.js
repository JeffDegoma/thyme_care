const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge')



module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, './public'),
        inline: true,
        open: true,
        host: '0.0.0.0',
        port: 7000,
        historyApiFallback: true,
      },
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
        ]
      }
})
