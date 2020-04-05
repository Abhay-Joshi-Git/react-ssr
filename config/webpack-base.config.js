module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      }
    ]
  }
}