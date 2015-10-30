// TODO: Look into https://www.npmjs.com/package/assets-webpack-plugin
// to generate HTML that has paths for hashed filenames.

// TODO: Check if it's possible to only use the extract-text-webpack-plugin
// when building for production so that we can use HMR in dev, but generate
// real css files when deploying.

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
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src')},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')}
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
