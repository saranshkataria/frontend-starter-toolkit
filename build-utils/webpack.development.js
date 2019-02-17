module.exports = () => ({
  devtool: 'eval-source-map',
  devServer: {
    open: true,
    compress: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
});
