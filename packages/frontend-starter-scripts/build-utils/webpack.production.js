module.exports = env => ({
  /**
   * If user wants to use source maps in production, they can opt in to do so ny using an environment variable parameter.
   * Otherwise they are disabled in production mode by default.
   */
  devtool: env.shouldUseSourceMap ? 'source-map' : false,
});
