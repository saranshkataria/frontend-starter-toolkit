const path = require('path');
// Plugin to run type checking as a separate process, even when hot reloading
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = () => ({
  // Enable source maps in dev mode with original source files wrapped around evals for better source mapping
  devtool: 'eval-source-map',
  // Configuration for webpack-dev-server
  devServer: {
    // Opens the application in a new tab by default when the command is run in terminal
    open: true,
    // Enable hot reloading on the server side
    hot: true,
    // Enable gzip compression to have a smaller file bundle delivered to the browser
    compress: true,
    // Tell webpack-dev-server which directory to watch for file changes
    contentBase: path.join(__dirname, 'src'),
    // Enabled to let webpack-dev-server watch files and trigger hot reload whenever files change
    watchContentBase: true,
    // Shows a full-screen overlay in the browser when there are compiler errors or warnings
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      // Checks for both syntactic errors and semantic errors
      checkSyntacticErrors: true,
      // Path to tsconfig file
      tsconfig: './tsconfig.json',
      // Wait for webpack emit to complete before type checking since we are using the overlay functionality
      async: false,
    }),
  ],
});
