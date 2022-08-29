
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './assets/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  mode: 'development',
  module: {
    rules: [
      // {
      //   test: /\.[tj]s$/,
      //   use:  [
      //     {
      //       loader: 'html-loader',
      //       options: { minimize: false },
      //     }
      //   ]
      // },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(woff(2)?|eot|ttf|otf)$/i,
      //   type: 'asset/resource',
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new  HtmlWebPackPlugin({
      template: './assets/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyPlugin({
      patterns: [
        // {
        //   from: './assets/Ancients',
        //   to: './img/Ancients',
        //   noErrorOnMissing: true,
        // },
        {
          from: './assets/img',
          to: './img/fon',
          noErrorOnMissing: true,
        },
        {
          from: './assets/MythicCards',
          to: './img/MythicCards',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  devtool: 'inline-source-map',

  devServer: {
    open: true,
    hot: true,
    static:{
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 9000,
  },
};