const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.min.html'
    })
  ],
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
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
        ]
    }]
  }
}