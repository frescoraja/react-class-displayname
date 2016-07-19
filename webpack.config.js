"use strict";

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: "./lib",
    filename: "index.js"
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      preset: 'es2015'
    }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
