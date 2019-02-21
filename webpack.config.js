const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const modeConfig = env => require(`./build-utils/webpack.${env.mode}.js`)(env);

module.exports = (env = { mode: 'production' }) => {
  return webpackMerge(
    {
      mode: env.mode,
      plugins: [
        new HtmlWebpackPlugin({
          hash: true,
          template: './src/index.html',
        }),
        new webpack.ProgressPlugin(),
      ],
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            enforce: 'pre',
            loader: 'eslint-loader',
          },
        ],
      },
      resolve: { extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'] },
    },
    modeConfig(env)
  );
};
