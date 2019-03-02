const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/index.html'),
      filename: path.join(__dirname, '/dist/index.html'),
    }),
  ],
};
