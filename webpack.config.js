const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = ({ mode }) => {
  return {
    mode: mode,
    plugins: [
      new HtmlWebpackPlugin({
        hash: true
      }),
      new webpack.ProgressPlugin()
    ]
  };
};
