module.exports = api => {
  // Testing if babel is being run in test mode
  const isTest = api.env('test');
  /**
   * Cache the returned value forever and don't call this function again. This is the default behavior but since we
   * are reading the env value above, we need to explicitly set it after we are done doing that, else we get a
   * caching was left unconfigured error.
   */
  api.cache(true);
  return {
    presets: [
      // For transformation of JSX and other react related bable plugins
      '@babel/preset-react',
      // Enabling Babel to understand TypeSFcript
      '@babel/preset-typescript',
      [
        // Allows smart transpilation according to target environments
        '@babel/preset-env',
        {
          // Specifying which browser versions you want to transpile down to
          targets: {
            browsers: ['last 2 versions'],
          },
          /**
           * Specifying what module type should the output be in.
           * For test cases, we transpile all the way down to commonjs since jest does not understand TypeScript.
           * For all other cases, we don't transform since we want Webpack to do that in order for it to do
           * dead code elimination (tree shaking) and intelligently select what all to add to the bundle.
           */
          modules: isTest ? 'commonjs' : false,
          /**
           * Setting how babel-preset-env handles pollyfills.
           * Usage adds specific imports for polyfills when they are used in each file.
           * It also takes advantage of the fact that a bundler will load the same polyfill only once.
           */
          useBuiltIns: 'usage',
          /**
           * useBuiltins needs to know which version of core-js to use to include polyfills accordingly.
           * Setting the proposals property to true allows Babel to inject proposal polyfills.
           */
          corejs: { version: 3, proposals: true },
        },
      ],
    ],
    // Enabling hot module replacement in builds using react hot loader
    plugins: ['react-hot-loader/babel'],
  };
};
