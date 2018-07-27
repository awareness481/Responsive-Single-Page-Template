const path = require('path');

module.exports = {
  entry: './src/app.js',
  target: 'web',
  node: {
    fs: 'empty'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      exclude: [ /(node_modules|bower_components)/,
                './src/server.js',
                './src/srv-compiled.js'
      ],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
   }]
  }
}