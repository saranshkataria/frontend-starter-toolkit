const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode }) => {
  return {
    mode: mode,
    plugins: [
      new HtmlWebpackPlugin({
        hash: true
      })
    ]
  };
};
