/* eslint-disable */
'use strict'

let path = require('path')
let webpack = require('webpack')

var config = {
  context: path.join(__dirname, './client'),
  entry: {
    js: './index.js',
    vendor: [ 'react' ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config
