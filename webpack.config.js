var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: {
    html: './index.html',
    javascript: './App.js',
  },
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
      },
    ],
  },
  externals: {
    'jade': 'jade',
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   // Force HTMLtoJSX to use the in-browser `document` object rather than
    //   // require the Node-only "jsdom" package.
    //   IN_BROWSER: true,
    // })
  ],
};