const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: [
      path.resolve(__dirname, 'src/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    //filename: '[name].[hash].js'
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3000
  }
};
