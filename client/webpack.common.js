const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");


let config = {
    entry: './index.js',
    output: {
        filename: 'output.js',
        path: path.resolve(__dirname, './public')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'],
        alias: {
          images: path.resolve(__dirname, 'client/assets/images') 
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                  plugins: [
                    [
                      "@babel/plugin-proposal-class-properties"
                    ]
                  ]
                },
            },
             {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  {loader: 'file-loader?name=client/assets/images/[name].[ext]'},
                
                ],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", 
                    "css-loader", 
                  ]
            },
            {
              test: /\.(ttf)$/i,
              use: [{loader: 'file-loader?name=client/assets/fonts/[name].[ext]'},
              ]
            },  
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
              }
        ]

    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "index.html"
          }),
          new MiniCssExtractPlugin({
            filename: 'styles.css',
            chunkFilename: '[id].css',
          }),
    ],

}

module.exports = config;


