module.exports = env => ({
  devtool: env.shouldUseSourceMap ? 'source-map' : false,
});
