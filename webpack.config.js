const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: 'index.html'
});

const copyWebpackPlugin = new CopyWebpackPlugin([
  { from: path.resolve(__dirname, 'src/assets'), to: 'assets' }
]);

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: [
      path.resolve(__dirname, 'src/index.ts')
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js' //'[name].[hash].js'
  },
  devServer: {
    port: 3000
  },
  plugins: [htmlWebpackPlugin, copyWebpackPlugin]
};
