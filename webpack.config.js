// TODO: Look into https://www.npmjs.com/package/assets-webpack-plugin
// to generate HTML that has paths for hashed filenames.

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/main',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: 'http://localhost:8080/public',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src')},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')}
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
