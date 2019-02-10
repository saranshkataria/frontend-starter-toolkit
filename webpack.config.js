const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const modeConfig = mode => require(`./build-utils/webpack.${mode}`)(mode);

module.exports = ({ mode } = { mode: 'production' }) => {
  return webpackMerge(
    {
      mode,
      plugins: [
        new HtmlWebpackPlugin({
          hash: true
        }),
        new webpack.ProgressPlugin()
      ],
      module: {
        rules: [
          {
            test: /\.(|ts|tsx)$/,
            loader: 'babel-loader'
          },
          {
            test: /\.js$/,
            use: ["source-map-loader"],
            enforce: "pre"
          }
        ]
      }
    },
    modeConfig(mode)
  );
};
