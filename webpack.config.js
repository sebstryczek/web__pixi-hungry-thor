const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: 'index.html'
});

module.exports = {
  entry: {
    main: [
      path.resolve(__dirname, 'src/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js' //'[name].[hash].js'
  },
  devServer: {
    port: 3000
  },
  plugins: [htmlWebpackPlugin]
};
