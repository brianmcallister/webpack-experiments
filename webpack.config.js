var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/main',
  ],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src')},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
