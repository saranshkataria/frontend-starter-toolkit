module.exports = () => ({
  devtool: 'eval-source-map',
  devServer: {
    open: true,
    hot: true,
    compress: true,
    watchContentBase: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
});
