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
    },]
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          publicPath: '.'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "resolve-url-loader",
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
        ],
      }
    ],
  },
}